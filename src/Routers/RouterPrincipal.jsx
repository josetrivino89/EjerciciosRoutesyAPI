import React from 'react'
import {BrowserRouter as Router ,Route,Routes,NavLink  } from "react-router-dom";
import Home from "../page/Home";
import Detalle from "../page/Detalle";
import Contacto from "../page/Contacto";


const RouterPrincipal = () => {
  return (
    <Router>

        {/*Titulo de cabezera*/}
    <div>Practica Principal</div>
    <nav>
        <ul>
            <li>
                <NavLink href="/Contacto">Contacto</NavLink>
            </li>
            <li>
                <NavLink href="/Detalle">Detalle</NavLink>
            </li>
            <li>
                <NavLink href="/Home">Home</NavLink>
            </li>
        </ul>
    </nav>
    {/* RUTAS */}
    <Routes>
        <Route path='./Home'element={<Home/>}/>
        <Route path='./'element={<Home/>}/>
        <Route path='./Detalle'element={<Detalle/>}/>
        <Route path='./Contacto'element={<Contacto/>}/>

    </Routes>


    {/* FOOTER */}
    <footer>Footer Aqui  mismo </footer>
        
    </Router>
  )
}

export default RouterPrincipal