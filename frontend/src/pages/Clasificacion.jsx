import Card from "../components/Plantillas/Card";
import ElementoLP from "../components/Plantillas/ElementoLp";
import ElementoP from "../components/Plantillas/ElementoP";
import Table from "../components/Plantillas/Table";

import Events from "../components/Events/Events";
import { useCompetitionTable } from "../hooks/useCompetitionQuery";
import { useCompetitionMatches } from "../hooks/useMatchesQuery";
import { Link } from "react-router";
import Button from "../components/Plantillas/Button";

function Clasificacion() {
  const { competitionsMatches } = useCompetitionMatches();
  const { competitionTable } = useCompetitionTable();

  return (
    <>
      <div className="container">
        <header className="bg-white/10 w-full h-fit p-2 backdrop-blur-md sticky top-0 z-999">
          <Link to="/">
            <Button />
          </Link>
        </header>
        <ElementoP>
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
          <ElementoLP
            nombre="Tabla de clasificacion"
            classNames="backdrop-blur-xl h-120 overflow-hidden"
          >
            <div className="col-span-9">
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
          </ElementoLP>
        </ElementoP>
      </div>
    </>
  );
}

export default Clasificacion;
