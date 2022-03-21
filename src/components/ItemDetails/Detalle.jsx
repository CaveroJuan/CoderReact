import React from "react";

function Detalle({ minimo, stock }) {
  return (
    <div>
      <p>Compra minima: {minimo} unidades</p>
      <p>Stock disponible: {stock} unidades</p>
    </div>
  );
}

export default Detalle;
