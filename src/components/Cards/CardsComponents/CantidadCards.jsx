import React, { useState } from "react";
import "./styles/CantidadCards.css";

function CantidadCards({ minimo, stock }) {
  const [count, setCount] = useState(minimo);
  return (
    // <div className='CantidadCards'>
    //   <button onClick={()=> count>minimo ? setCount(count-1) : setCount(minimo)}>-</button>
    //   <span>{count}</span>
    //   <button onClick={()=> (stock)>count ? setCount(count+1) : setCount(stock)}>+</button>
    // </div>
    <div>
      <div className="CantidadCards">
        <button onClick={() => (count > minimo ? setCount(count - 1) : setCount(minimo))}>-</button>
        <span>{stock===0 ? 0 : count}</span>
        <button onClick={() => (stock > count ? setCount(count + 1) : setCount(stock))}>+</button>
      </div>
      <div className='BotonCards' onClick={() => ( stock>0 ? console.log(`Se agregaron ${count} unidades`) : "")}>Agregar</div>
    </div>
  );
}

export default CantidadCards;
