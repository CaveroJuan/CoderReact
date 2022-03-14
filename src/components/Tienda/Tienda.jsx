import React from "react";
import TituloTienda from "./TiendaComponents/TituloTienda";
import Categorias from "./TiendaComponents/Categorias";
import FiltroPrecio from "./TiendaComponents/FiltroPrecio";
import CuadriculaTienda from "./TiendaComponents/CuadriculaTienda";
import "./styles/Tienda.css";
import { Route, Routes } from "react-router-dom";
import ItemDetails from "../ItemDetails/ItemDetails";

function Tienda() {
  return (
    <div className="Tienda">
      <TituloTienda />
      <FiltroPrecio />
      <Categorias />
      <Routes>
        <Route path="/:categoriaId/:detalleId/*" element={<ItemDetails />} />
        <Route path="/:categoriaId/*" element={<CuadriculaTienda />} />
        <Route path="/*" element={<CuadriculaTienda />} />
      </Routes>
    </div>
  );
}

export default Tienda;
