import React from "react";
import ElementoL from "./ElementoL";

function ElementoLP({
  logica = false,
  column = 1,
  nombre = "",
  height = "fit",
  children,
  scroll = true,
}) {
  const columnas = {
    2: `grid-cols-2`,
    3: `grid-cols-3`,
    4: `grid-cols-4`,
    5: `grid-cols-5`,
    6: `grid-cols-6`,
  };

  const alto = {
    fit: `h-fit`,
    vh: `h-vh`,
    dvh: `h-dvh`,
    full: `h-full`,
    screen: `h-screen`,
  };
  return (
    <article className={` ${alto[height]} w-full p-6 flex flex-col gap-6`}>
      <h2 className="text-4xl font-extrabold text-white text-shadow-md text-shadow-zinc-800">
        {nombre}
      </h2>
      <ul
        className={`${columnas[column]} scrollbar-hidden p-1 grid  gap-4 w-full ${scroll ? "max-h-[600px]" : "max-h-fit"} overflow-x-hidden scroll-hidden scroll-none transform-3d perspective-near`}
      >
        {children}
      </ul>
    </article>
  );
}

export default ElementoLP;
