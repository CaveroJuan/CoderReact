import React, { useEffect, useState } from "react";
import Cards from '../../Cards/Cards'
import "./styles/CuadriculaTienda.css";
import { getFetch} from "../../data";


function CuadriculaTienda() {

  const [productos, setproductos] = useState([])
  useEffect(() => {
   getFetch
    .then((result) => setproductos(result))
    .catch((err) => console.log(err))
  }, [])
  
  return (
    <div className="CuadriculaTienda">
      {productos.map((item)=><Cards key={item.id} foto={item.foto} nombre={item.nombre} precio={item.precio} minimo={item.minimo} stock={item.stock}/>)}
    </div>
  );
}

export default CuadriculaTienda;
