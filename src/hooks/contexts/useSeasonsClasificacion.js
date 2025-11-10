import { useTypeClasificacion } from "./useTypeClasificacion";

export function useSeasonsClasificacion() {
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
