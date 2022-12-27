import React, { useState, useEffect } from 'react'
import { statusService } from '../../services'

export default function Status(){
const [statusBackend, setStatusBacken] = useState('nope')

useEffect(() => {
  statusService.getStatusBackend().then(res =>
    setStatusBacken(res)
  )
}, [])

  return(
    <>
    {statusBackend === 'nope' ?
    <h1>Loading</h1>
      :
    <h1>Estatus backend: {statusBackend}</h1>
    }
    </>
  )
}
