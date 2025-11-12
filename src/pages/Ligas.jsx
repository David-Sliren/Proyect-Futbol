import { useEffect, useRef, useState } from "react";

import { useLigas, useTypeDeliga } from "../context/LigasDeFutbol";
import ElementoL from "../components/Plantillas/ElementoL";
import ElementoLP from "../components/Plantillas/ElementoLp";
import ElementoP from "../components/Plantillas/ElementoP";
import Bienvenida from "../components/Bienvenida/Bienvenida";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useBotones } from "../context/BotonData";
import { useLiga } from "../hooks/contexts/useLiga";
import { usePriorityLiga } from "../hooks/contexts/usePriorityLiga";
gsap.registerPlugin(useGSAP);

function Ligas({ loe }) {
  const { datosDeBotones, botonData } = useBotones();
  const { europeas, sudamericanas } = usePriorityLiga();
  const { data } = useLiga("League", 2025);
  const [isActive, setIsActive] = useState(false);
  const bienvenida = useRef();
  function handleClick(data) {
    datosDeBotones(data);
    loe();
  }

  useGSAP(() => {
    gsap
      .timeline({ autoRemoveChildren: true, onComplete: activador() })
      .from(bienvenida.current, {
        y: -100,
        duration: 0.8,
      });
  }, [bienvenida]);

  function activador() {
    setIsActive(!isActive);
  }

  return (
    <div className="h-[200vh]">
      <div ref={bienvenida}>
        {isActive && (
          <Bienvenida
            accion="ELije una liga"
            active={activador}
            height="fit"
            text={6}
            animacion="power1"
            animationDuration2={0}
            animationDuration1={0.8}
          />
        )}
      </div>
      <ElementoP nombre="Ligas">
        <ElementoLP nombre="Ligas principales" column={5}>
          {europeas.map((item) => {
            return (
              <ElementoL
                key={item.id}
                name={item.name}
                logo={item.logo}
                // logica={handleClick}
                // dependencia={item.selecion}
                // isActive={true}
              />
            );
          })}
        </ElementoLP>

        <ElementoLP nombre="Ligas sudamericanas" column={5}>
          {sudamericanas?.map((item) => {
            return (
              <ElementoL
                key={item.id}
                name={item.name}
                logo={item.logo}
                // logica={handleClick}
                // dependencia={item.selecion}
                // isActive={true}
              />
            );
          })}
        </ElementoLP>

        <ElementoLP nombre="Todas las ligas" column={3}>
          {data?.map((item) => {
            return (
              <ElementoL
                key={item.id}
                name={item.name}
                logo={item.logo}
                // logica={handleClick}
                // dependencia={item.liga}
                // isActive={true}
              />
            );
          })}
        </ElementoLP>
      </ElementoP>
      <h1>hola</h1>
    </div>
  );
}

export default Ligas;
