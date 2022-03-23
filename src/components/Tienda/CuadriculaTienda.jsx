import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Cards from "../Cards/Cards";

// import { doc, getDoc, getDocs, colection } from "firebase/firestore";
// import { getFirestoreApp } from "../../firebase/config";

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
        // console.log(categoriaId);
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
    // console.log(categoriaId);
  }, [categoriaId]);

  //un producto
  // useEffect(() => {
  //   const db = getFirestoreApp();
  //   const queryDb = doc(db, "items", "oSidTfVcMMukxtK5NqQm");
  //   getDoc(queryDb).then((resp) => console.log(resp));
  //     .then(resp => setProductos({id: resp.id, ...resp.data()}))
  // }, []);

  // varios productos
  // useEffect(() => {
  //   const db = getFirestoreApp();
  //   const queryColection = colection(db, "items");
  //   getDocs(queryColection).then((resp) => setProductos(resp.docs.map((item) => ({ id: item.id, ...item.data() }))));
  // }, []);

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
