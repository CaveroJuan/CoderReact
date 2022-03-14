import React from "react";
import { Link } from "react-router-dom";
import "./styles/Secciones.css";

function Secciones() {
  return (
    <ul className="Secciones">
      <li>
        <Link to={"/"}>Sobre Nosotros</Link>
      </li>
      <li>
        <Link to={"/"}>Productos</Link>
      </li>
      <li>
        <Link to={"/"}>Servicios</Link>
      </li>
      <li>
        <Link to={"/Tienda"}>Tienda</Link>
      </li>
      <li>
        <Link to={"/"}>Contactos</Link>
      </li>
    </ul>
  );
}

export default Secciones;
