import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CantidadCards from "../Cards/CardsComponents/CantidadCards";
import ImagenCards from "../Cards/CardsComponents/ImagenCards";
import PrecioCards from "../Cards/CardsComponents/PrecioCards";
import TituloCards from "../Cards/CardsComponents/TituloCards";
import Detalle from "./ItemDetailsComponents/Detalle";
import BotonCards from "../Cards//CardsComponents/BotonCards";
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
  const [inputType, setInpuType] = useState();
  const { detalleId } = useParams();

  const consulta = async (detalleId) => {
    try {
      const items = await (await fetch(`https://api.mercadolibre.com/items/${detalleId}`)).json();
      setProducto(items);
    } catch (error) {
      console.log("LA BASE DE DATOS SE ENCUENTRA VACIA");
    }
  };

  useEffect(() => {
    consulta(detalleId);
  }, [detalleId]);

  return (
    <div className="ItemDetails">
      <ImagenCards foto={producto.thumbnail} />
      <TituloCards nombre={producto.title} />
      <PrecioCards precio={producto.price} />
      <CantidadCards minimo={producto.available_quantity} stock={producto.sold_quantity} />
      <Detalle minimo={producto.available_quantity} stock={producto.sold_quantity} />
      <BotonCards id={1} texto={"Agregar"} onclick={console.log("hola")} />
      <BotonCards id={2} texto={"Finalizar compra"} onclick={console.log("hola")} />
      {/* <div className="BotonCards" onClick={() => (stock > 0 ? console.log(`Se agregaron ${count} unidades`) : "")}>
        Agregar
      </div> */}
    </div>
  );
}

export default ItemDetails;
