import { useLigas } from "../context/LigasDeFutbol";
import { useBotones } from "../context/BotonData";
import { useLiga } from "../hooks/contexts/useLiga";

import ElementoL from "../components/Plantillas/ElementoL";
import ElementoLP from "../components/Plantillas/ElementoLp";
import ElementoP from "../components/Plantillas/ElementoP";
import { useState } from "react";
import Table from "../components/Table/Table";
import { useEventsToday } from "../hooks/contexts/useEvents";
import Events from "../components/Events/Events";

function Clasificacion() {
  const { ligasOrganizadas } = useLigas();
  const { data } = useLiga("League", 2025);
  const [datos, setDatos] = useState(() => {
    const local = localStorage.getItem("local");
    return local ? JSON.parse(local) : [];
  });

  const { datos: eventslive } = useEventsToday();
  console.log(eventslive);
  return (
    <>
      <ElementoP nombre={datos[0].league.name}>
        <ElementoLP nombre="Tabla">
          <Table>
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
          </Table>
        </ElementoLP>
        <ElementoLP nombre="Eventos en vivo" column={4}>
          {eventslive.map((item, index) => {
            return (
              <Events
                img1={item.teams.home.logo}
                text={` ${item.goals.home} - ${item.goals.away}`}
                img2={item.teams.away.logo}
              />
            );
          })}
        </ElementoLP>
      </ElementoP>
    </>
  );
}

export default Clasificacion;
