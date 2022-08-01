import React from 'react'
import '../Componente1/StyleComponente1.css'

export default function Componente1 (props) {
    return (
        <div>
            <p className='componente-1'><b>Bienvenido</b> {props.nombre}</p>
        </div>
    )
}