import { useQuery } from "@tanstack/react-query";

import { type, priority } from "../api/competitions";

const time = 12 * 60 * 60 * 1000;

export function useCompetitionQuery() {
  const typeLeague = useQuery({
    queryKey: ["Home", { type: "LEAGUE" }],
    queryFn: () => type("LEAGUE"),
    staleTime: time,
  });

  const typeCup = useQuery({
    queryKey: ["Home", { type: "Cup" }],
    queryFn: () => type("CUP"),
    staleTime: time,
  });

  const priorityBigfive = useQuery({
    queryKey: ["Home", { priority: "bigfive" }],
    queryFn: () => priority("bigfive"),
    staleTime: time,
  });

  const prioritySudamerican = useQuery({
    queryKey: ["Home", { priority: "sudamerican" }],
    queryFn: () => priority("sudamerican"),
    staleTime: time,
  });

  return { typeLeague, typeCup, priorityBigfive, prioritySudamerican };
}
