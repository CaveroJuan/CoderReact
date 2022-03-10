import React, { useEffect, useState } from "react";
import Cards from '../../Cards/Cards'
import ItemDetails from "../../ItemDetails/ItemDetails";
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

const [productos, setProductos] = useState([])

// useEffect(() => {
//   fetch('https://api.mercadolibre.com/sites/MLA/search?q=buloneria&limit=10')
//   .then((response) => response.json())
//   .then((response) => setProductos(response.results))
// }, [])



const consulta = async () => {
  try {
    let items = await (await fetch("https://api.mercadolibre.com/sites/MLA/search?q=buloneria&limit=3")).json();
    setProductos(items.results)
  } catch (error) {
    console.log("LA BASE DE DATOS SE ENCUENTRA VACIA")
  }}

useEffect(() => {
  consulta();
  
}, []);


  
  return (
    <div className="CuadriculaTienda">
      {console.log(productos)}
      {/*CARDS CON PRODUCTOS*/}
      {/* {productos.map((item)=><Cards key={item.id} foto={item.foto} nombre={item.nombre} precio={item.precio} minimo={item.minimo} stock={item.stock}/>)} */}

      {productos.map((item)=><Cards key={item.id} foto={item.thumbnail} nombre={item.title} precio={item.price} minimo={item.available_quantity} stock={item.sold_quantity}/>)}
      {productos.map((item)=><ItemDetails key={item.id} foto={item.thumbnail} nombre={item.title} precio={item.price} minimo={item.available_quantity} stock={item.sold_quantity} cantCuotas={item.installments.quantity} precioCuotas={item.installments.amount}/>)}
    </div>
  );
}

export default CuadriculaTienda;
