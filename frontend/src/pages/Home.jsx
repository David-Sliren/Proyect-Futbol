// import { useBotones } from "../context/BotonData";

import { useCompetitionQuery } from "../hooks/useCompetitionQuery";

import Card from "../components/Plantillas/Card";
import ElementoLP from "../components/Plantillas/ElementoLp";
import ElementoP from "../components/Plantillas/ElementoP";

function Home() {
  const { typeLeague, typeCup, priorityBigfive, prioritySudamerican } =
    useCompetitionQuery();
  return (
    <div className="container w-full min-h-dvh">
      <ElementoP title="FUTBOL MANIA">
        <ElementoLP nombre="Cinco Grandes">
          {priorityBigfive.data?.map((item) => {
            return (
              <Card
                key={item.id}
                id={item.id}
                name={item.name}
                logo={item.logo}
                isActive={true}
              />
            );
          })}
        </ElementoLP>

        <ElementoLP nombre="Sudamericanas">
          {prioritySudamerican.data?.map((item) => {
            return (
              <Card
                key={item.id}
                id={item.id}
                name={item.name}
                logo={item.logo}
                isActive={true}
              />
            );
          })}
        </ElementoLP>

        <ElementoLP nombre="Torneos">
          {typeCup.data?.map((item) => {
            return (
              <Card
                key={item.id}
                id={item.id}
                name={item.name}
                logo={item.logo}
                isActive={true}
              />
            );
          })}
        </ElementoLP>

        <ElementoLP nombre="Todas las ligas">
          {typeLeague.data?.map((item) => {
            return (
              <Card
                key={item.id}
                id={item.id}
                name={item.name}
                logo={item.logo}
                isActive={true}
              />
            );
          })}
        </ElementoLP>
      </ElementoP>
    </div>
  );
}

export default Home;
