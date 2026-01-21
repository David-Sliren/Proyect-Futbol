import { fetchPrincipal } from "./fetchPrincipal.js";

export async function fetchCompetitions() {
  const data = await fetchPrincipal({
    url: "https://api.football-data.org/v4/competitions",
  });

  return data.competitions;
}

export async function fetchCompetitionsId(id) {
  const data = await fetchPrincipal({
    url: `https://api.football-data.org/v4/competitions/${id}/standings`,
  });

  return data.standings;
}
