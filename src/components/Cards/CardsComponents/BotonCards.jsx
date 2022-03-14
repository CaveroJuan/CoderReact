import React from "react";
import { Link } from "react-router-dom";
import "./styles/BotonCards.css";

function BotonCards({ id }) {
  return (
    <button className="BotonCards">
      <Link to={`${id}`}> Detalle</Link>
    </button>
  );
}

export default BotonCards;
