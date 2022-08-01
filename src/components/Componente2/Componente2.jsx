import React from 'react'
import '../Componente2/StyleComponente2.css'

export default function Componente2 (props) {
    return (
      <div>
        <p className="componente-2">{props.nombre}</p>
        <p>Estas Navegando por la pagina</p>
      </div>
    );
}