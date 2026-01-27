import Card from "../components/Plantillas/Card";
import ElementoLP from "../components/Plantillas/ElementoLp";
import ElementoP from "../components/Plantillas/ElementoP";
import Table from "../components/Plantillas/Table";

import Events from "../components/Events/Events";
import { useCompetitionTable } from "../hooks/useCompetitionQuery";
import { useCompetitionMatches } from "../hooks/useMatchesQuery";

function Clasificacion() {
  const { competitionsMatches } = useCompetitionMatches();
  const { competitionTable } = useCompetitionTable();

  return (
    <>
      <div className="container">
        <ElementoP nombre="Clasificacion">
          <div className="flex flex-col w-full p-4">
            <Table>
              {competitionTable.data?.map((item, i) => {
                return (
                  <tr key={i}>
                    <td>{item.position}</td>
                    <td className="flex">{item.team.name}</td>
                    <td>{item.playedGames}</td>
                    <td>{item.won}</td>
                    <td>{item.draw}</td>
                    <td>{item.lost}</td>
                    <td>{item.goalsFor}</td>
                    <td>{item.goalsAgainst}</td>
                    <td>{item.goalDifference}</td>
                    <td>{item.points}</td>
                  </tr>
                );
              })}
            </Table>
          </div>

          <ElementoLP nombre="Eventos en vivo" classNames=" xl:grid-cols-3">
            {competitionsMatches.data?.map((item) => {
              return (
                <Events
                  key={item.competition.id}
                  img1={item.localTeam.crest}
                  markerHome={item.score.home}
                  markerVisit={item.score.away}
                  img2={item.visitTeam.crest}
                  alt1={item.localTeam.name}
                  alt2={item.visitTeam.name}
                  status={item.statusGame}
                  date={item.startGame}
                />
              );
            })}
          </ElementoLP>
        </ElementoP>
      </div>
    </>
  );
}

export default Clasificacion;
