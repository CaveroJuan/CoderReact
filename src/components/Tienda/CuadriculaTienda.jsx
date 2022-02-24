import React from 'react'
import Cards from '../Cards/Cards'
import './style/CuadriculaTienda.css'

function CuadriculaTienda() {
  return (
    <div className='CuadriculaTienda'>
      {/* <h4>Cards de todos los productos cn boton para agregar a carrito</h4> */}
      <Cards/>
      {/* <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/> */}
    </div>
  )
}

export default CuadriculaTienda