import React from "react";

function Eimg({ img, alt }) {
  return (
    <div className=" size-22 rounded-full shadow-2xl">
      <img src={img} alt={alt} className="size-full" />
    </div>
  );
}

export default Eimg;
