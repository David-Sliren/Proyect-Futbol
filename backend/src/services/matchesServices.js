import { fetchPrincipal } from "./fetchPrincipal.js";

export const fetchMatches = async () => {
  const data = await fetchPrincipal({
    url: "https://api.football-data.org/v4/matches",
  });

  return data.matches;
};

export const matchesCompetition = async (query) => {
  const data = await fetchPrincipal({
    url: `https://api.football-data.org/v4/matches?competitions=${query}`,
  });

  return data.matches;
};
