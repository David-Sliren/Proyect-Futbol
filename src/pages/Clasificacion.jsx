import { useLigas } from "../context/LigasDeFutbol";
import { useBotones } from "../context/BotonData";
import { useLiga } from "../hooks/contexts/useLiga";

import ElementoL from "../components/Plantillas/ElementoL";
import ElementoLP from "../components/Plantillas/ElementoLp";
import ElementoP from "../components/Plantillas/ElementoP";

function Clasificacion() {
  const { ligasOrganizadas } = useLigas();
  const { data } = useLiga("League", 2025);
  // console.log(data);
  return (
    <>
      <ElementoP nombre="Clasificacion">
        <ElementoLP nombre="Equipos principales" column={3}>
          {data?.map((item) => {
            return (
              <ElementoL
                key={item.id}
                name={item.type}
                logo={item.logo}
                // id={item.id}
                // logica={datosDeBotones}
                // dependencia={item.seleccion}
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
