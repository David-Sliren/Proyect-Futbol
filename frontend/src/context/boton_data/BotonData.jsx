import { useState, createContext, useEffect } from "react";

const ContextBotones = createContext();
const KEY_STORE = "competition-store";
function BotonData({ children }) {
  const [botonData, setBotonData] = useState(getDataStore);

  function getDataStore() {
    const data = localStorage.getItem(KEY_STORE);
    return data ? JSON.parse(data) : null;
  }

  useEffect(() => {
    if (!botonData) return;
    localStorage.setItem(KEY_STORE, JSON.stringify(botonData));
  }, [botonData]);

  function getData(id) {
    setBotonData(id);
  }
  const valor = { botonData, getData };

  return (
    <ContextBotones.Provider value={valor}>{children}</ContextBotones.Provider>
  );
}

export default BotonData;
export { ContextBotones };
