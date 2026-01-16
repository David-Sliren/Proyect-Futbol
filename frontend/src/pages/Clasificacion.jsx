import { useEffect, useState } from "react";

import ElementoL from "../components/Plantillas/ElementoL";
import ElementoLP from "../components/Plantillas/ElementoLp";
import ElementoP from "../components/Plantillas/ElementoP";
import Table from "../components/Table/Table";

import Events from "../components/Events/Events";

function Clasificacion() {
  // Borrado de los eventos de hoy - Inicia
  const KEY_A_BORRAR = "eventsToday";
  const INTERVALO_DE_TIEMPO = 1800000; // 30 minutos

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
