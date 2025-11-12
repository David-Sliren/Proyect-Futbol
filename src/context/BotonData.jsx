import { useState, useEffect, createContext, useContext } from "react";
import { useFetch } from "../hooks/useFetch";

export const ContextBotones = createContext();

function BotonData({ children }) {
  const [botonData, setBotonData] = useState(null);

  const { datos, isLoading, error } = useFetch(
    `https://v3.football.api-sports.io/standings?league=${botonData}&season=2023`,
    "local"
  );
  // console.log("datos: ", datos);

  // useEffect(() => {
  //   if (botonData) {
  //     console.log("Hola Mundo");
  //   }
  // }, [botonData]);

  // useEffect(() => {
  //   localStorage.setItem("registreEquipo", JSON.stringify(registre));
  // }, [registre]);

  const valor = { botonData, setBotonData, datos };

  return (
    <ContextBotones.Provider value={valor}>{children}</ContextBotones.Provider>
  );
}

export default BotonData;

export function useBotones() {
  const context = useContext(ContextBotones);
  const { botonData, setBotonData, datos } = context;
  function datosDeBotones(datos) {
    setBotonData(datos);
  }

  return {
    botonData,
    setBotonData,
    datosDeBotones,
    datos,
    // isCahe,
  };
}
