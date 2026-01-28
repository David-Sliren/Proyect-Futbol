import express from "express";
import morgan from "morgan";
import cors from "cors";
import "dotenv/config"; // Carga las variables de entorno automáticamente

import { bigFive, sudamerican } from "./constants/typeLegue.js";
import {
  fetchMatches as q,
  matchesCompetition,
  fetchMatches,
} from "./services/matchesServices.js";
import {
  fetchCompetitions,
  fetchCompetitionsId,
} from "./services/cometitionsServices.js";

const app = express();
const PORT = process.env.PORT || 3000;

const ligaConfig = {
  bigfive: bigFive,
  sudamerican: sudamerican,
};
const typeCompetition = ["LEAGUE", "CUP"];

const cacheTypeCompetitions = {
  LEAGUE: { data: null, lastTime: 0 },
  CUP: { data: null, lastTime: 0 },
  duration: 1 * 60 * 60 * 1000,
};

const cacheMatches = {};
const CACHE_DURATION_Matches = 120 * 1000;

const cacheTable = {};
const CACHE_DURATION_Table = 5 * 60 * 1000;

app.use(cors());
app.use(morgan("dev")); // Logger de peticiones
app.use(express.json());

// Rutas Generales

app.use("/", express.static("public"));

app.get("/api/competitions/:type", async (req, res) => {
  const { type } = req.params;
  const { priority } = req.query;
  const NOW = Date.now();

  if (!typeCompetition.includes(type)) {
    return res.status(400).json({
      error: `Error Tipo de competicion no valida elija ${typeCompetition[0]} o ${typeCompetition[1]}`,
    });
  }
  // Para aceder a los los tipos de params en el cache
  const current = cacheTypeCompetitions[type];

  // Tiempo para calcular el guardado en cahe
  const DIFF = NOW - current.lastTime;
  try {
    if (!current.data || DIFF > cacheTypeCompetitions.duration) {
      const fecthData = await fetchCompetitions();
      const filterType = fecthData
        .filter((t) => t.type === type)
        .map((L) => ({ id: L.id, name: L.name, logo: L.emblem, type: L.type }));
      current.data = filterType;
      current.lastTime = NOW;
    }

    const data = current.data;

    // filtras las 5 grade ligas y las ligas sudamericanas
    if (priority) {
      const liga = data.filter((L) => ligaConfig[priority]?.includes(L.id));
      return res.json(liga);
    }

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener datos de fútbol" });
  }
});

app.get("/api/competitions/:id/table", async (req, res) => {
  const { id } = req.params;
  const NOW = Date.now();

  if (cacheTable[id] && NOW - cacheTable[id].lastTime < CACHE_DURATION_Table) {
    {
      return res.json(cacheTable[id].data);
    }
  }

  try {
    const data = await fetchCompetitionsId(id);

    if (data.length === 0) return res.json([]);

    const clean = data[0].table;

    cacheTable[id] = {
      data: clean,
      lastTime: NOW,
    };

    res.json(clean);
  } catch (e) {
    res.status(500).json({ error: "Error al obtener datos de futbol" });
  }
});

app.get("/api/matches", async (req, res) => {
  const { competitions } = req.query;
  const id = competitions || "all";
  const NOW = Date.now();

  function filterMatch(e) {
    const data = e?.map((m) => ({
      startGame: m.utcDate,
      statusGame: m.status,
      competition: m.competition,
      localTeam: m.homeTeam,
      visitTeam: m.awayTeam,
      score: m.score.fullTime,
    }));

    return data;
  }

  if (
    cacheMatches[id] &&
    NOW - cacheMatches[id].lastTime < CACHE_DURATION_Matches
  ) {
    return res.json(cacheMatches[id].data);
  }

  try {
    const data = competitions
      ? await matchesCompetition(id)
      : await fetchMatches();
    if (!data || data.length === 0) return res.json([]);
    const clean = filterMatch(data);

    cacheMatches[id] = {
      data: clean,
      lastTime: NOW,
    };

    res.json(clean);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener datos de fútbol" });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
