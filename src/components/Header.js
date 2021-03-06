import React from 'react'
import { Formulario } from './Formulario'

export const Header = ({setInfo}) => {
    return (
        <div className="container-fluid m-0">
        <div className="container p-5">
          <div className="titulo" >
          <p className="lead text-center">Bucador letras Canciones </p>
          </div>
          <Formulario 
          setInfo={setInfo}
          />
        </div>
        </div>
    )
}
