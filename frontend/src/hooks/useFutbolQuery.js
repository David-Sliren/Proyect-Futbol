import { useQuery } from "@tanstack/react-query";
import { futbolFetch } from "./useFetch";

export function useFutbolQuery() {
  const matches = useQuery({
    queryKey: ["matches"],
    queryFn: futbolFetch,
  });

  return { matches };
}
