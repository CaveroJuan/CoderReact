import React, { useState } from "react";
import "./styles/CantidadCards.css";

function CantidadCards({ minimo, stock, onAdd }) {
  const [count, setCount] = useState(minimo);
  const resta = () => {
    count > minimo ? setCount(count - 1) : setCount(minimo);
  };
  const suma = () => {
    stock > count ? setCount(count + 1) : setCount(stock);
  };
  const agregar = () => {
    stock > 0 ? onAdd(count) : console.log("No hay Stock");
  };

  return (
    // <div className='CantidadCards'>
    //   <button onClick={()=> count>minimo ? setCount(count-1) : setCount(minimo)}>-</button>
    //   <span>{count}</span>
    //   <button onClick={()=> (stock)>count ? setCount(count+1) : setCount(stock)}>+</button>
    // </div>
    <div>
      <div className="CantidadCards">
        <button onClick={resta}>-</button>
        <span>{stock === 0 ? 0 : count}</span>
        <button onClick={suma}>+</button>
      </div>

      <div className="BotonCards" onClick={agregar}>
        Agregar
      </div>
    </div>
  );
}

export default CantidadCards;
