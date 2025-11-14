import { useLigas } from "../context/LigasDeFutbol";
import { useBotones } from "../context/BotonData";
import { useLiga } from "../hooks/contexts/useLiga";

import ElementoL from "../components/Plantillas/ElementoL";
import ElementoLP from "../components/Plantillas/ElementoLp";
import ElementoP from "../components/Plantillas/ElementoP";
import { useState } from "react";
import Table from "../components/Plantillas/Table";

function Clasificacion() {
  const { ligasOrganizadas } = useLigas();
  const { data } = useLiga("League", 2025);
  const [datos, setDatos] = useState(() => {
    const local = localStorage.getItem("local");
    return local ? JSON.parse(local) : [];
  });
  console.log(datos);
  return (
    <>
      <ElementoP nombre={datos[0].league.name}>
        <ElementoLP nombre="Tabla">
          <Table>
            {datos[0].league.standings[0]?.map((item) => {
              return (
                <tr key={item.rank} className="border-2 border-t-0 text-center">
                  <td>{item.team.name}</td>
                  <td>{item.all.played}</td>
                  <td>{item.all.win}</td>
                  <td>{item.all.draw}</td>
                  <td>{item.all.lose}</td>
                  <td>{item.all.goals.for}</td>
                  <td>{item.all.goals.against}</td>
                  <td>{item.all.goals.for - item.all.goals.against}</td>
                  <td>{item.points}</td>
                </tr>
              );
            })}
          </Table>
        </ElementoLP>
      </ElementoP>
    </>
  );
}

export default Clasificacion;
