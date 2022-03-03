import React from 'react'
import CartWidget from '../Widgets/CartWidget'
import Logo from './NavBarComponents/Logo'
import Secciones from './NavBarComponents/Secciones'
import './styles/NavBar.css'

const NavBar = () => {
  return (
    <div className='NavBar'>
        <Logo/>
        <Secciones/>
        <CartWidget/>
    </div>
    
  )
}

export default NavBar

