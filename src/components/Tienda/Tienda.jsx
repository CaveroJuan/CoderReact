import React from 'react'
import TituloTienda from './TituloTienda' 
import ItemListContainer from './ItemListContainer' 
import FiltroPrecio from './FiltroPrecio'
import CuadriculaTienda from './CuadriculaTienda'
import './style/Tienda.css'


function Tienda() {

  const art1 = 'Arandelas'

  return (
    <div className='Tienda'>
        <TituloTienda/>
        <ItemListContainer greeting={art1}/>
        <FiltroPrecio/>
        <CuadriculaTienda/>
    </div>
  )
}

export default Tienda