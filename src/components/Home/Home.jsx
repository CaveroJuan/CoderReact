import React from "react";
import Header from "./HomeComponents/Header";
import SobreNosotros from "./HomeComponents/SobreNosotros";
import Productos from "./HomeComponents/Productos";
import Servicios from "./HomeComponents/Servicios";
import Contactos from "./HomeComponents/Contactos";
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
