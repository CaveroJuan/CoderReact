import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CantidadCards from "../Cards/CantidadCards";
import ImagenCards from "../Cards/ImagenCards";
import PrecioCards from "../Cards/PrecioCards";
import TituloCards from "../Cards/TituloCards";
import BotonCards from "../Cards/BotonCards";

import Detalle from "./Detalle";

import "./styles/ItemDetails.css";

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
  const [type, setType] = useState();
  const { detalleId } = useParams();
  const [loading, setLoading] = useState(true);

  const getFetchDelay = new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve(producto);
      }, 3000);
    } else {
      reject("404 not found");
    }
  });

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
    getFetchDelay
      .then(() => consulta(detalleId))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [detalleId]);

  return (
    <>
      {loading ? (
        <div>Cargando detalle de prodcto - 3seg</div>
      ) : (
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
      )}
    </>
  );
}

export default ItemDetails;
