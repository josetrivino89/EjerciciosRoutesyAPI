import React,{useEffect, useState}from 'react'
import {Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const LIMITE = 5;
const Ejercicio6 = () => {
    const navegate =useNavigate()
    const[Lista,SetLista]=useState([])

    const fetchapi =()=>{
        fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?count=${LIMITE}`)
        .then(response => response.json())
        .then(data => SetLista(data))
        .catch(e=>console.log(e));

    }

    const irDetalle=({character})=>{
        const [nombre,apellido] = character.split(" ")
        navegate(`/Detalle/${nombre}/${apellido}`)

    }
    //* usamos useEfectt min 1.50.07
    useEffect(()=>{
        fetchapi()

    },[])

  return (
    <div>
        <h1> Web Los Simpson </h1> 
        {Lista.map((personaje,index)=>
        <>
        <Container>
        <Row>
        <Col>    
        <p key={index}>{personaje.character}</p>
        <img src={personaje.image} alt="simpsonimagen" />
        <p>{personaje.quote}</p>
        <Button onClick={irDetalle(personaje)}>Ver este Personaje </Button>
        </Col>
        </Row>
        </Container>
        </>
        )}

    </div>
  )
}

export default Ejercicio6