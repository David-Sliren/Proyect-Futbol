import React from "react";
import Card from "./Card";

function ElementoLP({
  nombre = "",
  children,
  scroll = false,
  classNames = "xl:grid-cols-5",
}) {
  return (
    <article className={`w-full p-2 flex flex-col gap-6`}>
      <h2 className="text-3xl text-center font-semibold text-white text-shadow-md text-shadow-zinc-800 md:text-left md:text-4xl">
        {nombre}
      </h2>
      <div
        className={`scrollbar-hidden p-1 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  gap-4 w-full ${scroll ? "max-h-[600px] overflow-x-hidden" : "max-h-fit"} scroll-hidden scroll-none transform-3d perspective-near ${classNames}`}
      >
        {children}
      </div>
    </article>
  );
}

export default ElementoLP;
