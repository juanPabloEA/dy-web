import React from 'react';
import "./Contact.css";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";


const Contact = () => {
    return (
        <>
            <div className="contact-page">
                <div className="head">
                    <div className="title">Contactanos</div>
                    <div className="sub-title">Si deseas ver nuestros trabajos no dudes en entrar en nuestras redes sociales</div>
                </div>
                <div className="links">
                    <div className="item-a animate__animated animate__pulse">
                        <a className="btn btn-whatsapp" href="/"> <FaWhatsapp /> </a>
                    </div>
                    <div className="item-a animate__animated animate__pulse">
                        <a className="btn btn-facebook" href="/"><FaFacebook /></a>
                    </div>
                    <div className="item-a animate__animated animate__pulse">
                        <a className="btn btn-instagram" href="/"> <FaInstagram /></a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
