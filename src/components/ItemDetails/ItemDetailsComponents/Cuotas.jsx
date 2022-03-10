import React from 'react'

function Cuotas({cantCuotas, precioCuotas}) {
  return (
    <div><p>Puede realizar el pago de contado o en {cantCuotas} cuotas de ${precioCuotas}</p></div>
  )
}

export default Cuotas