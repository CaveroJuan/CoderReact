import React from 'react'
import cart from '../../png/cart.png'
import './styles/CartWidget.css'

function CartWidget() {
  return (
    <div className='cart'>
      <img src={cart} alt="carrito" />
    </div>
  )
}

export default CartWidget