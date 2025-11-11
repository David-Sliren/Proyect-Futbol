import { useMemo } from "react";

import { useClasificacion } from "../../context/ClasificacionDeFutbol";

export function useLiga(competencia, temporada) {
  const clasificacion = useClasificacion();
  const data = useMemo(() => {
    return clasificacion.filter(
      (item) => item.type == competencia && item.season == temporada
    );
  }, [clasificacion]);

  return { data };
}
