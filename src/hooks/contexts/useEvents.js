import { useFetch } from "../useFetch";

export function useEventsToday() {
  const { datos, error, isLoading } = useFetch(
    "https://v3.football.api-sports.io/fixtures?live=all",
    "eventsToday"
  );

  return { datos };
}
