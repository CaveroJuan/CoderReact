import React from 'react'
import TituloTienda from './TiendaComponents/TituloTienda' 
import Categorias from './TiendaComponents/Categorias' 
import FiltroPrecio from './TiendaComponents/FiltroPrecio'
import CuadriculaTienda from './TiendaComponents/CuadriculaTienda'
import './styles/Tienda.css'


function Tienda() {

  return (
    <div className='Tienda'>
        <TituloTienda/>
        <Categorias/>
        <FiltroPrecio/>
        <CuadriculaTienda/>
    </div>
  )
}

export default Tienda