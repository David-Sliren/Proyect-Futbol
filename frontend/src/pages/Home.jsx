// import { useBotones } from "../context/BotonData";

import { useCompetitionQuery } from "../hooks/useCompetitionQuery";

import ElementoL from "../components/Plantillas/ElementoL";
import ElementoLP from "../components/Plantillas/ElementoLp";
import ElementoP from "../components/Plantillas/ElementoP";

function Home() {
  const { typeLeague, typeCup, priorityBigfive, prioritySudamerican } =
    useCompetitionQuery();
  return (
    <div className="w-full min-h-dvh">
      <ElementoP nombre="FUTBOL MANIA">
        <ElementoLP nombre="Ligas principales" column={5}>
          {priorityBigfive.data?.map((item) => {
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
          })}
        </ElementoLP>

        <ElementoLP nombre="Ligas sudamericanas" column={5}>
          {prioritySudamerican.data?.map((item) => {
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
          })}
        </ElementoLP>

        <ElementoLP nombre="Todas las ligas" column={3}>
          {typeLeague.data?.map((item) => {
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
          })}
        </ElementoLP>

        <ElementoLP nombre="Todas las Copas" column={3}>
          {typeCup.data?.map((item) => {
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
          })}
        </ElementoLP>
      </ElementoP>
    </div>
  );
}

export default Home;
