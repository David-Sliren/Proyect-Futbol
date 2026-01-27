import React from "react";

function Eimg({ img, alt }) {
  return (
    <div className=" size-22">
      <img src={img} alt={alt} className="size-full object-contain" />
    </div>
  );
}

export default Eimg;
