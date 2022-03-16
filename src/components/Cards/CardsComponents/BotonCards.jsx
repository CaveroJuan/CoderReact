import React from "react";
import { Link } from "react-router-dom";
import "./styles/BotonCards.css";

function BotonCards({ id, texto }) {
  return (
    <button className="BotonCards">
      <Link to={`${id}`}> {texto}</Link>
    </button>
  );
}

export default BotonCards;
