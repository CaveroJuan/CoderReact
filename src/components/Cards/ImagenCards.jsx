import React from "react";

import "./styles/ImagenCards.css";

function ImagenCards({ foto }) {
  return (
    <div className="ImagenCards">
      <img src={foto} alt="" />
    </div>
  );
}

export default ImagenCards;
