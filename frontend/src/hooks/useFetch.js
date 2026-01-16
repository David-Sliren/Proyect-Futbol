export async function futbolFetch() {
  const url = "https://api.football-data.org/v4/matches";
  const res = await fetch(url, {
    method: "Get",
    headers: {
      "X-Auth-Token": "a3e708b251f247c1a88e4ff19b66aaf5",
    },
  });

  if (!res.ok) {
    throw new Error(`Error: ${(res.status, res.statusText)}`);
  }

  const data = await res.json();

  console.log(data);
}

futbolFetch();
