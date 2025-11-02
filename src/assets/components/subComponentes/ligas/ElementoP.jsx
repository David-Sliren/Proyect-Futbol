import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function ElementoP({ nombre = "name", children }) {
  const container = useRef(null);
  const h1 = useRef();

  // console.log(container.current);
  useGSAP(
    () => {
      gsap
        .timeline()
        .to(container.current, {
          y: 0,
          duration: 2,
          ease: "back",
        })
        .from(h1.current, {
          yPercent: 120,
          duration: 1,
        });
    },
    { dependencies: [h1, container] },
  );

  return (
    <section
      ref={container}
      className=" w-full min-h-dvh p-2 flex flex-col gap-12"
    >
      <div className=" h-fit pb-5 self-center  overflow-hidden">
        <h1
          ref={h1}
          className="text-8xl font-extrabold text-shadow-[0_0_8px] text-white text-shadow-black mt-7"
        >
          {nombre}
        </h1>
      </div>
      {children}
    </section>
  );
}

export default ElementoP;
