import React from "react";
import { Route, Routes } from "react-router-dom";

import TituloTienda from "./TituloTienda";
import Categorias from "./Categorias";
import FiltroPrecio from "./FiltroPrecio";
import CuadriculaTienda from "./CuadriculaTienda";
import ItemDetails from "../ItemDetails/ItemDetails";

import "./styles/Tienda.css";

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
