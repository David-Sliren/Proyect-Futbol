import { useState, useEffect } from "react";

export function useFetch(url, localName) {
  const [datos, setDatos] = useState(() => {
    const data = localStorage.getItem(localName);
    return data ? JSON.parse(data) : [];
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [controller, setController] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    setController(controller);
    if (datos.length) {
      setIsLoading(false);
      return;
    }

    async function llamada() {
      setIsLoading(true);
      setError(false);

      try {
        const res = await fetch(url, {
          method: "Get",
          headers: {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": "3cb3f603dcbe3073f4f023c1a952b901",
          },
          signal: controller.signal,
        });

        if (!res.ok) {
          throw new Error("Error: " + res.status);
        }

        const data = await res.json();
        localStorage.setItem(
          localName,
          JSON.stringify([...datos, data.response]),
        );
        setDatos(data.response);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log(error.name);
          return;
        }
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    llamada();

    return () => {
      controller.abort();
    };
  }, [url, localName, datos]);

  // console.log(error);
  return { datos, error, isLoading, controller };
}
