import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CantidadCards from "../Cards/CantidadCards";
import ImagenCards from "../Cards/ImagenCards";
import PrecioCards from "../Cards/PrecioCards";
import TituloCards from "../Cards/TituloCards";
import SubTituloCards from "../Cards/SubTituloCards";
import BotonCards from "../Cards/BotonCards";

import { useCartContext } from "../../context/cartContext";

import Detalle from "./Detalle";

import "./styles/ItemDetails.css";
import { doc, getDoc, getFirestore } from "firebase/firestore";

function ItemDetails() {
  const [producto, setProducto] = useState([]);
  const [type, setType] = useState();
  const { detalleId } = useParams();
  const [loading, setLoading] = useState(true);

  const getFetchDelay = new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve(producto);
      }, 1000);
    } else {
      reject("404 not found");
    }
  });

  const { agregarCart } = useCartContext();

  const onAdd = (cant) => {
    console.log(`Se agregaron: ${cant} unidades`);
    setType(cant);
    agregarCart({ ...producto, cantidadVendida: cant });
  };

  useEffect(() => {
    const db = getFirestore();
    const queryDb = doc(db, "articulos", detalleId);
    getFetchDelay
      .then(() => getDoc(queryDb).then((resp) => setProducto({ id: resp.id, ...resp.data() })))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [detalleId]);

  return (
    <>
      {loading ? (
        <div>Cargando detalle de prodcto - 3seg</div>
      ) : (
        <div className="ItemDetails">
          <ImagenCards foto={producto.Imagen} />
          <TituloCards nombre={producto.Nombre} />
          <SubTituloCards detalle={producto.Descripcion1} />
          <PrecioCards precio={producto.PrecioVentaUnidades1} />
          {type ? (
            <BotonCards id={"/CARRITO"} texto={"Ir al Carrito"} onclick={() => console.log("go cart")} />
          ) : (
            <CantidadCards minimo={Number(producto.CantVentaMinima)} stock={Number(producto.StockUnidades1)} onAdd={onAdd} />
          )}
          <Detalle minimo={Number(producto.CantVentaMinima)} stock={Number(producto.StockUnidades1)} />
        </div>
      )}
    </>
  );
}

export default ItemDetails;
