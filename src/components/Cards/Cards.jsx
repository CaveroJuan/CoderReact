import React from 'react'
import './styles/Cards.css'
import ImagenCards from './ImagenCards'
import TituloCards from './TituloCards'
import PrecioCards from './PrecioCards'
import CantidadCards from './CantidadCards'
import BotonCards from './BotonCards'

function Cards() {
  return (
    <div className='Cards'>
        <ImagenCards/>
        <TituloCards/>
        <PrecioCards/>
        <CantidadCards/>
        <BotonCards/>
    </div>
  )
}

export default Cards