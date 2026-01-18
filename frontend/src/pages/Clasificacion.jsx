import ElementoL from "../components/Plantillas/ElementoL";
import ElementoLP from "../components/Plantillas/ElementoLp";
import ElementoP from "../components/Plantillas/ElementoP";
import Table from "../components/Table/Table";

import Events from "../components/Events/Events";
// import { useFutbolQuery } from "../hooks/useFutbolQuery";

function Clasificacion() {
  // const { match } = useFutbolQuery();

  return (
    <>
      <ElementoP nombre="hola">
        <ElementoLP nombre="Tabla">
          {/* <Table>
            {datos[0].league.standings[0]?.map((item) => {
              return (
                <tr key={item.rank}>
                  <td className="font-semibold">{item.team.name}</td>
                  <td>{item.all.played}</td>
                  <td>{item.all.win}</td>
                  <td>{item.all.draw}</td>
                  <td>{item.all.lose}</td>
                  <td>{item.all.goals.for}</td>
                  <td>{item.all.goals.against}</td>
                  <td>{item.all.goals.for - item.all.goals.against}</td>
                  <td className="font-semibold">{item.points}</td>
                </tr>
              );
            })}
          </Table> */}
        </ElementoLP>
        <ElementoLP nombre="Eventos en vivo" column={3}>
          {/* {match.data?.map((item) => {
            return (
              <Events
                // key={item.competition.id}
                img1={item.homeTeam.crest}
                text={`${item.score.fullTime.home} - ${item.score.fullTime.away}`}
                img2={item.awayTeam.crest}
                // alt1={item.homeTeam.name}
                // alt2={item.awayTeam.name}
              />
            );
          })} */}
        </ElementoLP>
      </ElementoP>
    </>
  );
}

export default Clasificacion;
