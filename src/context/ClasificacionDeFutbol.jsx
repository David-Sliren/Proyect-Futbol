import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useFetch } from "../hooks/useFetch";

const contextClasificacion = createContext();

function ClasificacionDeFutbol({ children }) {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { datos } = useFetch(
    "https://v3.football.api-sports.io/leagues?current=true",
    "clasificacionFutbol"
  );

  const valor = { clasificacion: datos };

  return (
    <contextClasificacion.Provider value={valor}>
      {children}
    </contextClasificacion.Provider>
  );
}

export default ClasificacionDeFutbol;

export function useClasificacion() {
  const contextValue = useContext(contextClasificacion);
  const cls = contextValue.clasificacion;
  const clasificacion = useMemo(() => {
    return cls
      .map((cl) => {
        if (cl.seasons[0].coverage.standings === true) {
          return {
            name: cl.league.name,
            id: cl.league.id,
            logo: cl.league.logo,
            season: cl.seasons[0].year,
            type: cl.league.type,
          };
        }
      })
      .filter(Boolean);
  }, [cls]);

  return clasificacion;
}

export function useTypeClasificacion() {
  const clasificacion = useClasificacion();

  const league = useMemo(() => {
    return clasificacion
      .map((l) => {
        if (l.type === "League") {
          return { ...l };
        }
      })
      .filter(Boolean);
  }, [clasificacion]);

  const cup = useMemo(() => {
    return clasificacion
      .map((c) => {
        if (c.type === "Cup") {
          return { ...c };
        }
      })
      .filter(Boolean);
  }, [clasificacion]);

  //   console.log(cup);

  return {
    cup,
    league,
  };
}

export function useSeasons() {
  function Seasons(type, seasonss) {
    if (type === "League") {
      const { league } = useTypeClasificacion();
      const seasons = useMemo(() => {
        return league
          .map((l) => {
            if (l.season > seasonss) return { ...l };
          })
          .filter(Boolean);
      }, [league]);

      return seasons;
    } else if (type === "Cup") {
      const { cup } = useTypeClasificacion();
      const seasons = useMemo(() => {
        return cup
          .map((c) => {
            return c.season === seasonss ? { ...c } : null;
          })
          .filter(Boolean);
      }, [cup]);

      return seasons;
    } else {
      return "Coloque una competencia valida";
    }
  }
  return Seasons;
}
