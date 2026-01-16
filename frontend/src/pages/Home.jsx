import { useEffect, useRef, useState } from "react";

// import { useBotones } from "../context/BotonData";

import { futbolFetch } from "../hooks/useFetch";

import ElementoL from "../components/Plantillas/ElementoL";
import ElementoLP from "../components/Plantillas/ElementoLp";
import ElementoP from "../components/Plantillas/ElementoP";

function Home({ loe }) {
  // const { matches } = useFutbolQuery();

  // console.log(matches.data);

  // const [isActive, setIsActive] = useState(false);
  // function handleClick(data) {
  //   loe();
  // }

  return (
    <div className="w-full min-h-dvh">
      <ElementoP nombre="Ligas">
        <ElementoLP nombre="Ligas principales" column={5}>
          {/* {europeas.map((item) => {
            return (
              <ElementoL
                key={item.id}
                name={item.name}
                logo={item.logo}
                // logica={datosDeBotones}
                dependencia={item.id}
                isActive={false}
              />
            );
          })} */}
        </ElementoLP>

        <ElementoLP nombre="Ligas sudamericanas" column={5}>
          {/* {sudamericanas?.map((item) => {
            return (
              <ElementoL
                key={item.id}
                name={item.name}
                logo={item.logo}
                logica={datosDeBotones}
                dependencia={item.id}
                isActive={false}
              />
            );
          })} */}
        </ElementoLP>

        <ElementoLP nombre="Todas las ligas" column={3}>
          {/* {data?.map((item) => {
            return (
              <ElementoL
                key={item.id}
                name={item.name}
                logo={item.logo}
                // logica={datosDeBotones}
                dependencia={item.id}
                isActive={false}
              />
            );
          })} */}
        </ElementoLP>
      </ElementoP>
    </div>
  );
}

export default Home;
