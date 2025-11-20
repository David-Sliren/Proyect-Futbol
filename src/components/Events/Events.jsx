import React from "react";
import Eimg from "./Eimg";

function Events({ img1 = "", img2 = "", text = "", alt1 = "", alt2 = "" }) {
  return (
    <article className=" overflow-hidden flex justify-evenly items-center gap-1 max-w-xl rounded-2xl p-4 border-2 bg-zinc-200 shadow-2xl">
      <Eimg img={img1} alt={alt1} />
      <p className="text-4xl text-shadow-lg font-extrabold">{text}</p>
      <Eimg img={img2} alt={alt2} />
    </article>
  );
}

export default Events;
