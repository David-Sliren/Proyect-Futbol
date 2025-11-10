import React, { createContext, useContext, useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";

const ContextLigas = createContext();

const principales = [
  {
    liga: "Española",
    id: 140,
    temporadas: [2023, 2024, 2025],
    CopaDelRey: 143,
  },

  {
    liga: "Inglesa",
    id: 39,
    temporadas: [2023, 2024, 2025],
    Copa1: 40,
    Copa2: 45,
  },
  {
    liga: "Francesa",
    id: 61,
    temporadas: [2023, 2024, 2025],
    Copa1: 66,
    Copa2: 65,
  },
  {
    liga: "Italiana",
    id: 135,
    temporadas: [2023, 2024, 2025],
    Copa1: 137,
    Copa2: 705,
  },
  {
    liga: "Alemana",
    id: 78,
    temporadas: [2023, 2024, 2025],
    Copa1: 81,
    Copa2: 529,
  },
];

const sudamericanas = [
  {
    liga: "Brazil",
    id: 71,
    temporadas: [2023, 2024, 2025],
    CopaDelRey: 143,
  },

  {
    liga: "Argentina",
    id: 128,
    temporadas: [2023, 2024, 2025],
    Copa1: 40,
    Copa2: 45,
  },
  {
    liga: "Colombia",
    id: 239,
    temporadas: [2023, 2024, 2025],
    Copa1: 66,
    Copa2: 65,
  },
  {
    liga: "Uruguay",
    id: 268,
    temporadas: [2023, 2024, 2025],
    Copa1: 137,
    Copa2: 705,
  },
  {
    liga: "Paraguay",
    id: 252,
    temporadas: [2023, 2024, 2025],
    Copa1: 81,
    Copa2: 529,
  },
  {
    liga: "Ecuador",
    id: 242,
    temporadas: [2023, 2024, 2025],
    Copa1: 81,
    Copa2: 529,
  },
  {
    liga: "Chile",
    id: 265,
    temporadas: [2023, 2024, 2025],
    Copa1: 81,
    Copa2: 529,
  },
  {
    liga: "Peru",
    id: 281,
    temporadas: [2023, 2024, 2025],
    Copa1: 81,
    Copa2: 529,
  },
  {
    liga: "Bolivia",
    id: 344,
    temporadas: [2023, 2024, 2025],
    Copa1: 81,
    Copa2: 529,
  },
];

function LigasDeFutbol({ children }) {
  const { datos } = useFetch(
    "https://v3.football.api-sports.io/leagues?type=league",
    "ligasDeFutbol"
  );

  const valor = { ligas: datos };
  return (
    <ContextLigas.Provider value={valor}>{children}</ContextLigas.Provider>
  );
}

export default LigasDeFutbol;

export function useLigas() {
  const contextValue = useContext(ContextLigas);
  const { ligas } = contextValue;
  // ..
  // ...
  // ....
  const ligasOrganizadas = ligas
    .slice()
    .map((item) => {
      return {
        liga: item.league.name,
        logo: item.league.logo,
        id: item.league.id,
        temporadas: item.seasons,
        selecion: item.country.name,
        codeSelecion: item.country.code,
        imgSelecion: item.country.flag,
        tipoGeneral: item.league.type,
      };
    })
    .sort((a, b) => a.liga.localeCompare(b.liga));

  return {
    ...ligas,
    ligasOrganizadas,
  };
}

export function useTypeDeliga() {
  const { ligasOrganizadas } = useLigas();
  const pricipales = principales.map((item) => {
    const datos = ligasOrganizadas.find((lo) => lo.id === item.id);
    return datos;
  });

  const sudamericana = sudamericanas.map((item) => {
    const datos = ligasOrganizadas.find((lo) => lo.id === item.id);
    return datos;
  });

  // const sudame = ligasOrganizadas.filter(
  //   (item) => item.selecion === "Colombia"
  // );
  // console.log("sudame: ", sudame);

  return {
    sudamericanas: sudamericana,
    principales: pricipales,
    todas: ligasOrganizadas,
  };
}
