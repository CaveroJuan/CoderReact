import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CantidadCards from "../Cards/CardsComponents/CantidadCards";
import ImagenCards from "../Cards/CardsComponents/ImagenCards";
import PrecioCards from "../Cards/CardsComponents/PrecioCards";
import TituloCards from "../Cards/CardsComponents/TituloCards";
import Marca from "./ItemDetailsComponents/Marca";
// import BotonCards from './CardsComponents/BotonCards'
import "./styles/ItemDetails.css";
//para base de datos
// function ItemDetails({ foto, nombre, precio, minimo, stock, cantCuotas, precioCuotas })
function ItemDetails() {
  const [productos, setProductos] = useState([]);
  const { detalleId } = useParams();

  const consulta = async (detalleId) => {
    try {
      const items = await (await fetch(`https://api.mercadolibre.com/items/${detalleId}`)).json();
      setProductos(items);
    } catch (error) {
      console.log("LA BASE DE DATOS SE ENCUENTRA VACIA");
    }
  };

  useEffect(() => {
    // console.log(detalleId);
    consulta(detalleId);
  }, [detalleId]);

  return (
    <div className="ItemDetails">
      {console.log(productos)}
      <ImagenCards foto={productos.thumbnail} />
      <TituloCards nombre={productos.title} />
      <PrecioCards precio={productos.price} />
      <CantidadCards minimo={productos.available_quantity} stock={productos.sold_quantity} />
      {/* <Marca marca={productos.seller_address.city.name} /> */}
      {/* <BotonCards/> */}
    </div>
  );
}

//para base de datos
/* <div className="ItemDetails">
<ImagenCards foto={foto} />
<TituloCards nombre={nombre} />
<PrecioCards precio={precio} />
<CantidadCards minimo={minimo} stock={stock} />
<Cuotas cantCuotas={cantCuotas} precioCuotas={precioCuotas} />
<BotonCards/>
</div> */

export default ItemDetails;
