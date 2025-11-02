import { useState, useEffect, useRef } from "react";
import Bienvenida from "./subComponentes/Bienvenida/Bienvenida";
import Ligas from "./subComponentes/Ligas";
import Equipos from "./subComponentes/Equipos";
function Home() {
  const main = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [isFemenine, setIsFemenine] = useState(false);
  const [isLOE, setisLOE] = useState(!true);

  function activation() {
    setIsActive(!isActive);
  }

  function loen() {
    setisLOE(!isLOE);
  }
  return (
    <>
      <main ref={main.current} className="w-full min-h-dvh">
        {/* {!isActive && (
          <Bienvenida
            accion="Bienvenido"
            active={activation}
            genere={isFemenine}
          />
        )} */}
        {isLOE ? <Ligas loe={loen} /> : <Equipos />}
      </main>
    </>
  );
}

export default Home;
