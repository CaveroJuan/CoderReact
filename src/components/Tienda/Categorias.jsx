import React, { useEffect, useState } from "react";
import "./styles/Categorias.css";
import { Link } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";

function Categorias() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const queryDb = collection(db, "categorias");
    getDocs(queryDb)
      // .then((resp) => setCategorias(resp))
      .then((resp) => setCategorias(resp.docs.map((resp) => ({ id: resp.id, ...resp.data() }))))
      .catch((err) => console.log(err));
  }, []);
  // console.log(categorias);
  return (
    <div className="Categorias">
      <h4>Categorías de Productos</h4>
      <ul className="Lista">
        {categorias.map((item) => (
          <li key={item.id}>
            <Link to={`${item.Codigo}`}>{item.Descripcion}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categorias;
