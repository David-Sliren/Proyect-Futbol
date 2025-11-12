import { useMemo } from "react";

import { useClasificacion } from "../../context/ClasificacionDeFutbol";

export function useLiga(competencia, temp) {
  const clasificacion = useClasificacion();
  const data = useMemo(() => {
    return clasificacion.filter(
      (item) => item.type == competencia && item.season == temp
    );
  }, [clasificacion]);

  return { data };
}
