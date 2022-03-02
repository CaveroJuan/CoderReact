import React from 'react'
import './style/ItemListContainer.css'

function ItemListContainer() {
  return (
    <div className='ItemListContainer'>
      <h4>Categorías de Productos</h4>
      <ul className='Lista'>
        <li>Arandelas</li>
        <li>Bulones</li>
        <li>Esparragos</li>
        <li>Resortes</li>
        <li>Tornillos</li>
        <li>Tuercas</li>
      </ul>
    </div>
  )
}

export default ItemListContainer