import React from 'react'
import './styles/Datos.css'
import logo2 from '../../../png/logo2.png'

function Datos() {
  return (
    <div className='Datos'>
        <div className='Logo2'>
           <img src={logo2} alt="logo" /> 
        </div>
        <div className='Info'>
           <p>1168482019</p> 
           <p>buloneracavero@gmail.com</p>
           <p>Av. San Martin 2471, Rafael Calzada, Bs As. </p>
        </div>
        
    </div>
  )
}

export default Datos