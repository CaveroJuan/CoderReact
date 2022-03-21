import React from "react";
import Datos from "./Datos";
import Social from "./Social";
import Secciones from "../NavBar/Secciones";
import "./styles/Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <Datos />
      <Secciones />
      <Social />
      <h4 className="Creado">CREADO POR JUAN</h4>
    </div>
  );
}

export default Footer;
