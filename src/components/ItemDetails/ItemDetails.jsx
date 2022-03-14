import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import CantidadCards from "../Cards/CardsComponents/CantidadCards";
import ImagenCards from "../Cards/CardsComponents/ImagenCards";
import PrecioCards from "../Cards/CardsComponents/PrecioCards";
import TituloCards from "../Cards/CardsComponents/TituloCards";
import Cuotas from "./ItemDetailsComponents/Cuotas";
// import BotonCards from './CardsComponents/BotonCards'
import "./styles/ItemDetails.css";

function ItemDetails({ foto, nombre, precio, minimo, stock, cantCuotas, precioCuotas }) {
  const { detalleId } = useParams();

  useEffect(() => {
    console.log(detalleId);
  }, [detalleId]);

  return (
    <div className="ItemDetails">
      <ImagenCards foto={foto} />
      <TituloCards nombre={nombre} />
      <PrecioCards precio={precio} />
      <CantidadCards minimo={minimo} stock={stock} />
      <Cuotas cantCuotas={cantCuotas} precioCuotas={precioCuotas} />
      {/* <BotonCards/> */}
    </div>
  );
}

export default ItemDetails;
