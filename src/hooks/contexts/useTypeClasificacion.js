import { useClasificacion } from "../../context/ClasificacionDeFutbol";

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

  return {
    cup,
    league,
  };
}
