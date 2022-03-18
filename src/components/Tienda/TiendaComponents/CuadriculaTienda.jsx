import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cards from "../../Cards/Cards";
import "./styles/CuadriculaTienda.css";

//CARDS CON PRODUCTOS de base
// import { getFetch } from "../../data";

//CARDS CON PRODUCTOS de base
// const [productos, setproductos] = useState([])
// useEffect(() => {
//  getFetch
//   .then((result) => setproductos(result))
//   .catch((err) => console.log(err))
// }, [])

//Uso directo de la api
// useEffect(() => {
//   fetch('https://api.mercadolibre.com/sites/MLA/search?q=buloneria&limit=10')
//   .then((response) => response.json())
//   .then((response) => setProductos(response.results))
// }, [])

//CARDS CON PRODUCTOS de base de datos
//{productos.map((item)=><Cards key={item.id} foto={item.foto} nombre={item.nombre} precio={item.precio} minimo={item.minimo} stock={item.stock}/>)} */}

function CuadriculaTienda() {
  const [productos, setProductos] = useState([]);
  const { categoriaId } = useParams();

  const consulta = async (categoriaId) => {
    try {
      let items;
      if (categoriaId === undefined) {
        items = await (await fetch(`https://api.mercadolibre.com/sites/MLA/search?limit=3&q=buloneria`)).json();
      } else {
        items = await (await fetch(`https://api.mercadolibre.com/sites/MLA/search?limit=3&q=${categoriaId}`)).json();
      }
      // %20 para agregar una palabra ---
      setProductos(items.results);
    } catch (error) {
      console.log("LA BASE DE DATOS SE ENCUENTRA VACIA");
    }
  };

  useEffect(() => {
    consulta(categoriaId);
    console.log(categoriaId);
  }, [categoriaId]);

  return (
    <div className="CuadriculaTienda">
      {productos.map((item) => (
        <Cards
          key={item.id}
          id={item.id}
          foto={item.thumbnail}
          nombre={item.title}
          precio={item.price}
          minimo={item.available_quantity}
          stock={item.sold_quantity}
        />
      ))}
    </div>
  );
}

export default CuadriculaTienda;
