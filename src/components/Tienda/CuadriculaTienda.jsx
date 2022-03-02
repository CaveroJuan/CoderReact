import React, { useEffect, useState } from "react";
import Cards from '../Cards/Cards'
import "./style/CuadriculaTienda.css";
import { articulos } from "../data";

const getFetch = new Promise((resolve, reject) => {
  if (articulos.length!==0) { setTimeout(() => { resolve(articulos) }, 2000) } 
  else { reject("LA BASE DE DATOS SE ENCUENTRA VACIA")}
})



function CuadriculaTienda() {

  const [productos, setproductos] = useState([])
  useEffect(() => {
   getFetch
    .then((result) => setproductos(result))
    .catch((err) => console.log(err))
  }, [])

  console.log(productos)
  
  return (
    <div className="CuadriculaTienda">
      {productos.map((item)=><Cards key={item.id} foto={item.foto} nombre={item.nombre} precio={item.precio} minimo={item.minimo} stock={item.stock}/>)}
    </div>
  );
}

export default CuadriculaTienda;
