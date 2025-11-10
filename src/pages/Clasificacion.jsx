import { useEquipos } from "../context/EquiposDeFutbol";
import { useLigas } from "../context/LigasDeFutbol";
import { useBotones } from "../context/BotonData";

import ElementoL from "../components/Plantillas/ElementoL";
import ElementoLP from "../components/Plantillas/ElementoLp";
import ElementoP from "../components/Plantillas/ElementoP";

function Clasificacion() {
  const { filtrado } = useEquipos();
  const { ligasOrganizadas } = useLigas();

  return (
    <>
      <ElementoP nombre="Clasificacion">
        <ElementoLP nombre="Equipos principales" column={3}>
          {filtrado.map((item) => {
            if (item.equipo == "Spain") {
              return;
            }

            return (
              <ElementoL
                key={item.id}
                name={item.equipo}
                logo={item.logo}
                id={item.id}
                logica={datosDeBotones}
                dependencia={item.seleccion}
                // isActive={true}
              />
            );
          })}
        </ElementoLP>
      </ElementoP>
    </>
  );
}

export default Clasificacion;
