import React, { useEffect, useState }  from 'react'
import './styles/Categorias.css'
import { getFetch } from "../../data";


function Categorias() {
  const [productos, setproductos] = useState([])
  useEffect(() => {
   getFetch
    .then((result) => {
      let orden = result.map((item) => item.categoria);
      orden.sort();
      let filtrado = orden.filter((item, index, array) => (array.indexOf(item)===index))
      setproductos(filtrado)})
    .catch((err) => console.log(err))
  }, [])

  return (
    <div className='Categorias'>
      <h4>Categorías de Productos</h4>
      <ul className='Lista'>
        {productos.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  )
}

export default Categorias