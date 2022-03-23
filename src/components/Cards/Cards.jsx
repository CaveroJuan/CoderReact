import React from "react";

import ImagenCards from "./ImagenCards";
import TituloCards from "./TituloCards";
import PrecioCards from "./PrecioCards";
import BotonCards from "./BotonCards";

import "./styles/Cards.css";

function Cards({ id, foto, nombre, precio, minimo, stock }) {
  // console.log(id);
  return (
    <div className="Cards">
      <ImagenCards foto={foto} />
      <TituloCards nombre={nombre} />
      <PrecioCards precio={precio} />
      <BotonCards id={id} texto={"Detalle"} />
    </div>
  );
}

export default Cards;
