import { useState, useEffect, createContext, useContext } from "react";

export const ContextBotones = createContext();

function BotonData({ children }) {
  const [botonData, setBotonData] = useState(null);

  const valor = { botonData, setBotonData };

  return (
    <ContextBotones.Provider value={valor}>{children}</ContextBotones.Provider>
  );
}

export default BotonData;

// export function useBotones() {
//   const context = useContext(ContextBotones);
//   const { botonData, setBotonData, datos } = context;
//   function datosDeBotones(datos) {
//     setBotonData(datos);
//   }

//   return {
//     botonData,
//     setBotonData,
//     datosDeBotones,
//     datos,
//     // isCahe,
//   };
// }
