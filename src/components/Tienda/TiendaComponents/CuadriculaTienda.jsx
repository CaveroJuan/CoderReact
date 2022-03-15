import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cards from "../../Cards/Cards";
// import ItemDetails from "../../ItemDetails/ItemDetails";
import "./styles/CuadriculaTienda.css";
//CARDS CON PRODUCTOS
// import { getFetch } from "../../data";

function CuadriculaTienda() {
  //CARDS CON PRODUCTOS
  // const [productos, setproductos] = useState([])
  // useEffect(() => {
  //  getFetch
  //   .then((result) => setproductos(result))
  //   .catch((err) => console.log(err))
  // }, [])

  const [productos, setProductos] = useState([]);
  const { categoriaId } = useParams();

  // useEffect(() => {
  //   fetch('https://api.mercadolibre.com/sites/MLA/search?q=buloneria&limit=10')
  //   .then((response) => response.json())
  //   .then((response) => setProductos(response.results))
  // }, [])

  const consulta = async (categoriaId) => {
    try {
      let items;
      if (categoriaId === undefined) {
        items = await (await fetch(`https://api.mercadolibre.com/sites/MLA/search?limit=3&q=buloneria`)).json();
      } else {
        items = await (await fetch(`https://api.mercadolibre.com/sites/MLA/search?limit=3&q=${categoriaId}`)).json();
      }
      // %20 para agregar una palabra --- buscar las id de la categoria y escribir segun el click debajo en el link el id correcto
      setProductos(items.results);
    } catch (error) {
      console.log("LA BASE DE DATOS SE ENCUENTRA VACIA");
    }
  };

  // useEffect(() => {
  //   consulta();
  // }, []);

  useEffect(() => {
    consulta(categoriaId);
  }, [categoriaId]);

  return (
    <div className="CuadriculaTienda">
      {console.log(productos)}
      {/*CARDS CON PRODUCTOS*/}
      {/* {productos.map((item)=><Cards key={item.id} foto={item.foto} nombre={item.nombre} precio={item.precio} minimo={item.minimo} stock={item.stock}/>)} */}
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
      {/* {productos.map((item) => (
        <ItemDetails
          key={item.id}
          foto={item.thumbnail}
          nombre={item.title}
          precio={item.price}
          minimo={item.available_quantity}
          stock={item.sold_quantity}
          cantCuotas={item.installments.quantity}
          precioCuotas={item.installments.amount}
        />
      ))} */}
    </div>
  );
}

export default CuadriculaTienda;
