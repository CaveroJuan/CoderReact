import React from "react";

import "./styles/PrecioCards.css";

function PrecioCards({ precio }) {
  return <div className="PrecioCards">${precio}</div>;
}

export default PrecioCards;
