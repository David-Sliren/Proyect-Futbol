import ElementoP from "./ligas/ElementoP";
import ElementoLP from "./ligas/ElementoLp";
import ElementoL from "./ligas/ElementoL";
import { useEquipos } from "../../../context/EquiposDeFutbol";
import { useLigas } from "../../../context/LigasDeFutbol";
import {
  useSeasons,
  useTypeClasificacion,
} from "../../../context/ClasificacionDeFutbol";
import { UseBotones } from "../../../context/BotonData";

function Equipos() {
  const { filtrado } = useEquipos();
  const { datosDeBotones } = UseBotones();
  // console.log(equipos);
  const { ligasOrganizadas } = useLigas();
  const cls = useTypeClasificacion();
  // console.log("cls: ", cls);
  const seasonFun = useSeasons();

  // console.log(seasonFun("Cup", 2022));
  // console.log(botonData);
  return (
    <>
      <ElementoP nombre="Equipos">
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

export default Equipos;
