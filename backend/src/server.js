import express from "express";
import morgan from "morgan";
import cors from "cors";
import "dotenv/config"; // Carga las variables de entorno automáticamente

import { bigFive, sudamerican } from "./constants/typeLegue.js";
import { fetchMatches } from "./services/matchesServices.js";
import { fetchCompetitions } from "./services/cometitionsServices.js";

const app = express();
const PORT = process.env.PORT || 3000;

const ligaConfig = {
  bigfive: bigFive,
  sudamerican: sudamerican,
};

const typeCompetition = ["LEAGUE", "CUP"];

app.use(cors());
app.use(morgan("dev")); // Logger de peticiones
app.use(express.json());

// Rutas Generales

app.use("/", express.static("public"));

app.get("/api/competitions/:type", async (req, res) => {
  const { type } = req.params;
  const { priority } = req.query;

  if (!typeCompetition.includes(type)) {
    return res.status(400).json({
      error: `Error Tipo de competicion no valida elija ${typeCompetiton[0]} o ${typeCompetiton[1]}`,
      error: `Error Tipo de competicion no valida elija ${typeCompetition[0]} o ${typeCompetition[1]}`,
    });
  }

  try {
    const data = await fetchCompetitions();

    const filterType = data
      .filter((t) => t.type === type)
      .map((L) => ({ id: L.id, name: L.name, logo: L.emblem, type: L.type }));

    if (priority && typeCompetition.includes(type)) {
      if (type === typeCompetition[1]) {
        const filter = data.filter((t) => t.type === type);
        return res.json(filter);
      }

      const liga = filterType.filter((L) =>
        ligaConfig[priority]?.includes(L.id),
      );
      return res.json(liga);
    }

    res.json(filterType);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener datos de fútbol" });
  }
});

app.get("/api/matches", async (req, res) => {
  try {
    const data = await fetchMatches();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener datos de fútbol" });
  }
});

app.get("/api/matches/:type", async (req, res) => {
  const { type } = req.params;

  if (!ligaConfig[type]) {
    return res
      .status(400)
      .json({ error: "Tipo de liga no válido. Use 'bigfive' o 'sudamerican'" });
  }

  try {
    const data = await fetchMatches();

    const filter = data.filter(
      (match) =>
        match?.competition && ligaConfig[type].includes(match.competition?.id),
    );
    res.json(filter);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener datos de fútbol" });
  }
});

app.get("/about", (req, res) => {
  res.send("About Project Futbol");
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
