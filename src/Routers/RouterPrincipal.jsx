import React from 'react'
import {BrowserRouter as Router ,Route,Routes,NavLink  } from "react-router-dom";
import Home from "../page/Home";
import Detalle from "../page/Detalle";
import Contacto from "../page/Contacto";
import Ejercicio6 from "../page/Ejercicio6";
import {routes} from "../Routers/routes";

const RouterPrincipal = () => {
  return (
    <Router>

        {/*Titulo de cabezera*/}
    <div>Practica Principal</div>
    <nav>
        <ul>
            <li>
                <NavLink to="/Contacto" className={(datosNavegacion) =>{const isActivado = datosNavegacion.isActive;return isActivado ? "Activo":""}}>Contacto</NavLink>
            </li>
            <li>
                <NavLink to="/Detalle"className={(datosNavegacion) =>{const isActivado = datosNavegacion.isActive;return isActivado ? "Activo":""}}>Detalle</NavLink>
            </li>
           {/* puedo tambien poner los path y los nombre en un archivo de routas y llamarlos con un map, asiganerles un nombrey traer los datos con el . */}
            {routes.map((ruta, index)=>(
                 <li key={index}>
                 <NavLink to={ruta.path}className={(datosNavegacion) =>{const isActivado = datosNavegacion.isActive;return isActivado ? "Activo":""}}>{ruta.name}</NavLink>
             </li>

            ))}
            <li>
                <NavLink to="/Ejercicio6"className={(datosNavegacion) =>{const isActivado = datosNavegacion.isActive;return isActivado ? "Activo":""}}>Ejercicio 6</NavLink>
            </li>
        </ul>
    </nav>
    {/* RUTAS */}
    <Routes>
        <Route path='/Home'element={<Home/>}/>
        <Route path='/'element={<Home/>}/>
        <Route path='/Detalle/:nombre/:apellido'element={<Detalle/>}/>
        <Route path='/Detalle'element={<Detalle/>}/>
        <Route path='/Contacto'element={<Contacto/>}/>
        <Route path='/Ejercicio6'element={<Ejercicio6/>}/>
        <Route path='*'element={<>Error 404</>}/>

    </Routes>


    {/* FOOTER */}
    
    <footer>Footer Aqui  mismo </footer>
        
    </Router>
  )
}

export default RouterPrincipal