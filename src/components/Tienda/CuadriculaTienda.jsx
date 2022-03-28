import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cards from "../Cards/Cards";

import "./styles/CuadriculaTienda.css";

import { collection, getDocs, getFirestore } from "firebase/firestore";

function CuadriculaTienda() {
  const [productos, setProductos] = useState([]);
  const [mostrar, setMostrar] = useState([]);
  const { categoriaId } = useParams();
  const [loading, setLoading] = useState(true);

  const getFetchDelay = new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve(productos);
      }, 1000);
    } else {
      reject("404 not found");
    }
  });

  useEffect(() => {
    const db = getFirestore();
    const queryDb = collection(db, "articulos");

    getFetchDelay
      .then(() => {
        if (categoriaId === undefined) {
          getDocs(queryDb).then((resp) => {
            setProductos(resp.docs.map((resp) => ({ id: resp.id, ...resp.data() })));
            console.log("LISTOO");
          });
        } else {
          getDocs(queryDb).then((resp) => setMostrar(resp.docs.map((resp) => ({ id: resp.id, ...resp.data() }))));
          setProductos(mostrar.filter((item) => item.CategoriaId === categoriaId));
          console.log("estamos aca");
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [categoriaId]);

  console.log(mostrar);
  return (
    <>
      {loading ? (
        <div>Cargando lista de productos - 1seg</div>
      ) : (
        // <></>
        <div className="CuadriculaTienda">
          {productos.map((item) => (
            <Cards key={item.id} id={item.id} foto={item.Imagen} nombre={item.Nombre} precio={item.PrecioVentaUnidades1} />
          ))}
        </div>
      )}
    </>
  );
}

export default CuadriculaTienda;
