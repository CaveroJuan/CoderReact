import React, { useEffect, useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import CantidadCards from "../Cards/CardsComponents/CantidadCards";
import ImagenCards from "../Cards/CardsComponents/ImagenCards";
import PrecioCards from "../Cards/CardsComponents/PrecioCards";
import TituloCards from "../Cards/CardsComponents/TituloCards";
import Detalle from "./ItemDetailsComponents/Detalle";
import BotonCards from "../Cards//CardsComponents/BotonCards";
import "./styles/ItemDetails.css";
import Cart from "../Cart/Cart";
import { getFetchDelay } from "../data";

//para base de datos
// function ItemDetails({ foto, nombre, precio, minimo, stock, cantCuotas, precioCuotas })

//item datail para base de datos
/* <div className="ItemDetails">
<ImagenCards foto={foto} />
<TituloCards nombre={nombre} />
<PrecioCards precio={precio} />
<CantidadCards minimo={minimo} stock={stock} />
<Cuotas cantCuotas={cantCuotas} precioCuotas={precioCuotas} />
<BotonCards/>
</div> */

function ItemDetails() {
  const [producto, setProducto] = useState([]);
  // const [delay, setDelay] = useState();
  const [type, setType] = useState();
  const { detalleId } = useParams();

  const consulta = async (detalleId) => {
    try {
      const items = await (await fetch(`https://api.mercadolibre.com/items/${detalleId}`)).json();
      setProducto(items);
    } catch (error) {
      console.log("LA BASE DE DATOS SE ENCUENTRA VACIA");
    }
  };

  const onAdd = (cant) => {
    console.log(`Se agregaron: ${cant} unidades`);
    setType(cant);
  };

  useEffect(() => {
    // getFetchDelay
    //   .then((result) => {
    //     setDelay(delay);
    consulta(detalleId);
    // })
    // .catch((err) => console.log(err));
  }, [detalleId]);

  return (
    <>
      {producto ? (
        <div className="ItemDetails">
          <ImagenCards foto={producto.thumbnail} />
          <TituloCards nombre={producto.title} />
          <PrecioCards precio={producto.price} />
          {type ? (
            <BotonCards id={"/CARRITO"} texto={"Ir al Carrito"} onclick={() => console.log("go cart")} />
          ) : (
            <CantidadCards minimo={producto.available_quantity} stock={producto.sold_quantity} onAdd={onAdd} />
          )}
          <Detalle minimo={producto.available_quantity} stock={producto.sold_quantity} />
        </div>
      ) : (
        <div>Cargando detalle de prodcto</div>
      )}
    </>
  );
}

export default ItemDetails;
