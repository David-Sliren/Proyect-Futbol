import { useState, useEffect, useRef } from "react";
import Bienvenida from "../components/Bienvenida/Bienvenida";
import Ligas from "./Ligas";
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
        {!isActive ? (
          <Bienvenida
            accion="Bienvenido"
            active={activation}
            genere={isFemenine}
          />
        ) : (
          <Ligas />
        )}
      </main>
    </>
  );
}

export default Home;
