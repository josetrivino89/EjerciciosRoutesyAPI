import React from 'react'
import { useParams , useSearchParams } from "react-router-dom";

const Detalle = () => {
    const params=useParams()
    const [search]=useSearchParams();

    console.log(search);
  return (
    <div>Detalle

    {params.nombre && params.apellido && <p> Hola {params.nombre} {params.apellido}</p>}

    </div>
  )
}

export default Detalle