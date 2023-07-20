import React from 'react';
import "./Contact.css";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";


const Contact = () => {
    return (
        <>
            <div className="contact-page">
                <div className="head">
                    <div className="title">Contactanos</div>
                    <div className="sub-title">¡Estamos aquí para ti! Si tienes preguntas o comentarios sobre nuestras deliciosas tortas, no dudes en contactarnos. Tu satisfacción es nuestra prioridad y esperamos poder ayudarte en todo lo que necesites</div>
                </div>
                <div className="links">
                    <div className="item-a animate__animated animate__pulse animate__infinite animate__slow">
                        <a className="btn btn-whatsapp" target="_blank" rel="noreferrer noopener" href="https://wa.link/f1eni6"> <FaWhatsapp /> </a>
                    </div>
                    <div className="item-a animate__animated animate__pulse animate__infinite animate__slow">
                        <a className="btn btn-facebook" target="_blank" rel="noreferrer noopener" href="https://www.facebook.com/deliciasdelayoya.tortascaseras"><FaFacebook /></a>
                    </div>
                    <div className="item-a animate__animated animate__pulse animate__infinite animate__slow">
                        <a className="btn btn-instagram" target="_blank" rel="noreferrer noopener" href="https://www.instagram.com/deliciasdelayoya/"> <FaInstagram /></a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
