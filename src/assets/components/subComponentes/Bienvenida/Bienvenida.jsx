import React, { useRef, useState } from "react";

// gsap
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// bienvenida

gsap.registerPlugin(useGSAP);

function Bienvenida({
  accion,
  genere = false,
  active = "cambia el stado",
  height = "dvh",
  text = 8,
  animacion = "elastic.out",
  animationDuration1 = 0.6,
  animationDuration2 = 0.6,
  animationDuration3 = 0.6,
}) {
  const men = accion;
  // console.log("accion: ", accion);
  const letras = [...men];
  const main = useRef();

  //   styles
  const tamaños = {
    full: "h-full",
    fit: "h-fit",
    dvh: "h-dvh",
    vh: "vh",
    screen: "h-screen",
  };
  const texto = {
    8: "text-8xl",
    7: "text-7xl",
    6: "text-6xl",
    5: "text-5xl",
    4: "text-4xl",
    3: "text-3xl",
    2: "text-2xl",
  };

  const stylesBackground = `bg-black  p-6 w-full ${tamaños[height]} flex justify-center items-center overflow-hidden`;

  const stylesFont = `${texto[text]} text-white`;
  useGSAP(
    () => {
      gsap
        .timeline({
          autoRemoveChildren: true,
          onComplete: () => {
            active();
          },
        })
        .to(".bienvenida, .name", {
          stagger: 0.2,
          color: `rgb(${gsap.utils.random(0, 255)}, ${gsap.utils.random(0, 255)}, ${gsap.utils.random(0, 255)})`,
          duration: animationDuration1,
          // repeat: 2 - 1,
          // yoyo: true,
        })
        .from(".bienvenida, .name", {
          // x: () => gsap.utils.random(-800, 800),
          yPercent: () => gsap.utils.random(-400, 400),
          scale: () => gsap.utils.random(0, 4),
          rotate: () => gsap.utils.random(-360, 360),
          stagger: 0.2,
          ease: animacion,
          duration: animationDuration2,
          // color: "transparent",
          // yoyo: true,
          // repeat: 2 - 1,
        })

        .to(main.current, {
          yPercent: -100,
          duration: animationDuration3,
        });
    },
    { scope: main.current },
  );
  return (
    <section className="overflow-hidden font-bold">
      <article ref={main} className={stylesBackground}>
        {letras.map((item, i) => {
          const contenido = item === " " ? "\u00A0" : item;
          return (
            <span className={`bienvenida ${stylesFont}`} key={i}>
              {contenido}
            </span>
          );
        })}
      </article>
    </section>
  );
}

export default Bienvenida;
