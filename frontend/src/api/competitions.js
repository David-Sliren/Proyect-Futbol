import API_URL from "./config";

export async function competitions() {
  const url = `${API_URL}/competitions`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Error: ${(res.status, res.statusText)}`);
  }

  return res.json();
}

// Type
export async function type(T) {
  const url = `${API_URL}/competitions/${T}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Error: ${(res.status, res.statusText)}`);
  }

  return res.json();
}

// Priority
export async function priority(P) {
  const url = `${API_URL}/competitions/LEAGUE?priority=${P}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Error: ${(res.status, res.statusText)}`);
  }

  return res.json();
}
