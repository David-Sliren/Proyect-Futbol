import { useEffect, useRef, useState } from "react";
import { useLigas, useTypeDeliga } from "../../../context/LigasDeFutbol";
import ElementoL from "./ligas/ElementoL";
import ElementoLP from "./ligas/ElementoLp";
import ElementoP from "./ligas/ElementoP";
import Bienvenida from "./Bienvenida/Bienvenida";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  useClasificacion,
  useTypeClasificacion,
} from "../../../context/ClasificacionDeFutbol";
import { UseBotones } from "../../../context/BotonData";
gsap.registerPlugin(useGSAP);

function Ligas({ loe }) {
  // const classi = useClasificacion();
  const { datosDeBotones, botonData } = UseBotones();
  // console.log("botonData: ", botonData);
  const { ligasOrganizadas } = useLigas();
  const { principales, sudamericana } = useTypeDeliga();
  const [isActive, setIsActive] = useState(false);
  const bienvenida = useRef();
  // console.log(ligasOrganizadas);
  // console.log(bienvenida);
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
    <>
      <main>
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
            {principales.map((item) => {
              return (
                <ElementoL
                  key={item.id}
                  name={item.liga}
                  logo={item.logo}
                  logica={handleClick}
                  dependencia={item.selecion}
                  isActive={true}
                />
              );
            })}
          </ElementoLP>

          <ElementoLP nombre="Ligas sudamericanas" column={5}>
            {sudamericana.map((item) => {
              return (
                <ElementoL
                  key={item.id}
                  name={item.liga}
                  logo={item.logo}
                  logica={handleClick}
                  dependencia={item.selecion}
                  isActive={true}
                />
              );
            })}
          </ElementoLP>

          <ElementoLP nombre="Todas las ligas" column={2}>
            {ligasOrganizadas.map((item) => {
              return (
                <ElementoL
                  key={item.id}
                  name={item.liga}
                  logo={item.logo}
                  logica={handleClick}
                  dependencia={item.liga}
                  isActive={true}
                />
              );
            })}
          </ElementoLP>
        </ElementoP>
      </main>
    </>
  );
}

export default Ligas;
