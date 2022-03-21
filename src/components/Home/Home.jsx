import React from "react";
import Header from "./Header";
import SobreNosotros from "./SobreNosotros";
import Productos from "./Productos";
import Servicios from "./Servicios";
import Contactos from "./Contactos";
import "./styles/Home.css";

function Home() {
  return (
    <div className="Home">
      <Header />
      <SobreNosotros />
      <Productos />
      <Servicios />
      <Contactos />
      <h1>UTILIZAR EL NAVBAR</h1>
    </div>
  );
}

export default Home;
