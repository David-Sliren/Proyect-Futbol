import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useLigas } from "./LigasDeFutbol";
import { useClasificacion } from "./ClasificacionDeFutbol";
import { useFetch } from "../hooks/useFetch";
import { useBotones } from "./BotonData";

const ContextEquipos = createContext();

function EquiposDeFutbol({ children }) {
  const { botonData, setBotonData, registre, isCahe } = useBotones();
  console.log(isCahe);
  const url =
    botonData && !isCahe
      ? `https://v3.football.api-sports.io/teams?country=${botonData}`
      : null;

  const { datos, error, isLoading, controller } = useFetch(
    url,
    "equiposDeFutbol"
  );

  const valor = {
    datos,
    isLoading,
    error,
    registre,
    botonData,
    setBotonData,
  };
  return (
    <ContextEquipos.Provider value={valor}>{children}</ContextEquipos.Provider>
  );
}

export default EquiposDeFutbol;

export function useEquipos() {
  const contextValue = useContext(ContextEquipos);
  const allEquipos = contextValue.datos;
  const { botonData, setBotonData } = contextValue;
  // ..
  // ...
  // ....
  const equiposOrganizados = useMemo(() => {
    return allEquipos.slice().map((eq) => {
      return {
        seleccion: eq.team?.country,
        code: eq.team?.code,
        id: eq.team?.id,
        equipo: eq.team?.name,
        logo: eq.team?.logo,
        estadio: eq.venue?.name,
        capacidadEstadio: eq.venue?.capacity,
        ciudad: eq.venue?.city,
        idEstadio: eq.venue?.id,
        imgEstadio: eq.venue?.image,
        direccion: eq.venue?.address,
      };
    });
  }, [allEquipos]);

  // ..
  // ...
  // ....
  const equipos = useMemo(() => {
    return equiposOrganizados.slice().map((eq) => {
      return {
        equipo: eq?.equipo,
        logo: eq?.logo,
        id: eq?.id,
        seleccion: eq?.seleccion,
        code: eq?.code,
        idEstadio: eq?.idEstadio,
      };
    });
  }, [equiposOrganizados]);

  const filtrado = useMemo(() => {
    return equipos.filter((n) => n.seleccion === botonData);
  }, [equipos]);

  // console.log("filtrado: ", filtrado);
  // ..
  // ...
  // ....
  const estadios = useMemo(() => {
    return equiposOrganizados.slice().map((eq) => {
      return {
        estadio: eq?.estadio,
        capacidad: eq?.capacidadEstadio,
        id: eq?.idEstadio,
        selecion: eq?.selecion,
        ciudad: eq?.ciudad,
        imagen: eq?.imgEstadio,
        direccion: eq?.direccion,
        idEquipo: eq?.id,
      };
    });
  }, [equiposOrganizados]);

  return {
    allEquipos,
    equiposOrganizados,
    equipos,
    estadios,
    filtrado,
  };
}
