import { useState, useEffect, createContext, useContext } from "react";

const ContextBotones = createContext();

function BotonData({ children }) {
  const [botonData, setBotonData] = useState(null);
  const [registre, setRegistre] = useState(() => {
    const local = localStorage.getItem("registreEquipo");
    return local ? JSON.parse(local) : [];
  });
  const isCahe = registre.includes(botonData);
  console.log(botonData);

  useEffect(() => {
    if (botonData) {
      if (!isCahe) {
        setRegistre((prev) => [...prev, botonData]);
      }
    }
  }, [botonData]);

  useEffect(() => {
    localStorage.setItem("registreEquipo", JSON.stringify(registre));
  }, [registre]);

  const valor = { botonData, setBotonData, registre, isCahe };

  return (
    <ContextBotones.Provider value={valor}>{children}</ContextBotones.Provider>
  );
}

export default BotonData;

export function UseBotones() {
  const context = useContext(ContextBotones);
  const { botonData, setBotonData, registre, isCahe } = context;
  function datosDeBotones(datos) {
    setBotonData(datos);
  }

  return {
    botonData,
    setBotonData,
    datosDeBotones,
    registre,
    isCahe,
  };
}
