import React from 'react'
import TituloTienda from './TituloTienda' 
import ItemListContainer from './ItemListContainer' 
import FiltroPrecio from './FiltroPrecio'
import CuadriculaTienda from './CuadriculaTienda'
import './style/Tienda.css'


function Tienda() {

  return (
    <div className='Tienda'>
        <TituloTienda/>
        <ItemListContainer/>
        <FiltroPrecio/>
        <CuadriculaTienda/>
    </div>
  )
}

export default Tienda