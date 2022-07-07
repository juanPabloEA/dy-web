import React from 'react';
import "./RequestOrderPreview.css";
import { useSelector } from 'react-redux';
import { getCurrentQuotation } from '../../../../store/shop/shop.selector';
import {  FaWhatsapp } from "react-icons/fa";


export default function RequestOrderPreview() {
    const currentQuotation = useSelector(getCurrentQuotation)
    console.log(currentQuotation)

    function getFilledToString() {
        return currentQuotation.filled.map(data => data.title).join(', ')
    }

    function helloMessage() {
        console.log("click!")
    }

    return (
        <div className='RequestOrderPreview'>
            <h2>Gracias por preferrirnos !<br/> {currentQuotation.user.name} </h2> 
            <h3> Revisa tu pedido ... </h3><br/>
            <div className='bold-text'> Tamaño: </div> {currentQuotation.size.title} <br/>
            <div className='bold-text'> Bizcocho: </div> {currentQuotation.bizcuit.title} <br/>
            <div className='bold-text'> Cobertura: </div> {currentQuotation.cover.title} <br/>
            <div className='bold-text'> Relleno: </div> {getFilledToString()} <br/>
            <div className="contact">
                <div className="bold-text"> Envianos tu cotización: </div> 
                <div onClick={helloMessage}> <a className="btn btn-whatsapp" target="_blank" rel="noreferrer noopener" > <FaWhatsapp> Enviar </FaWhatsapp> </a> </div>
            </div>
        </div>
    );
}
