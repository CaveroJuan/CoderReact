import React, { useEffect, useState } from "react";
import "./styles/Categorias.css";
import { getFetch } from "../../data";
import { Link } from "react-router-dom";

//Categorias cn cod para ml de la base
//   getFetchCategorias
//     .then((result) => {
//       setproductos(result);
//       console.log(productos);
//     })
//     .catch((err) => console.log(err));
// }, []);

//lista con nombres de cat pero cn cod de ml de la base
// <div className="Categorias">
//   <h4>Categorías de Productos</h4>
//   <ul className="Lista">
//     {productos.map((item) => (
//       <li key={item.id}>
//         <Link to={`${item.id}`}>{item.nombre}</Link>
//       </li>
//     ))}
//   </ul>
// </div>

function Categorias() {
  const [productos, setproductos] = useState([]);

  useEffect(() => {
    //BASE DE DATOS PARA ARMAR LISTA DE CATEGORIAS - LAS CATEGORIAS SE REPITEN / ARMA ARRAY CN 1 UNICA PALABRA X CADA CATEGORIA
    getFetch
      .then((result) => {
        let orden = result.map((item) => item.categoria);
        orden.sort();
        let filtrado = orden.filter((item, index, array) => array.indexOf(item) === index);
        setproductos(filtrado);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="Categorias">
      <h4>Categorías de Productos</h4>
      <ul className="Lista">
        {productos.map((item, index) => (
          <li key={index}>
            <Link to={`${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categorias;
