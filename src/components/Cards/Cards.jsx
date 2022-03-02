import React from 'react'
import './styles/Cards.css'
import ImagenCards from './CardsComponents/ImagenCards'
import TituloCards from './CardsComponents/TituloCards'
import PrecioCards from './CardsComponents/PrecioCards'
import CantidadCards from './CardsComponents/CantidadCards'
// import BotonCards from './CardsComponents/BotonCards'

function Cards({foto, nombre, precio, minimo, stock}) {
  return (
    <div className='Cards'>
        <ImagenCards foto={foto}/>
        <TituloCards nombre={nombre}/>
        <PrecioCards precio={precio}/>
        <CantidadCards minimo={minimo} stock={stock}/>
        {/* <BotonCards/> */}
    </div>
  )
}

export default Cards