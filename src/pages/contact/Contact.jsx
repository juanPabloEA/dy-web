import React from 'react';
import "./Contact.css";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";


const Contact = () => {
    return (
        <>
            <div className="contact-page">
                <div className="head">
                    <div className="title">Contactanos</div>
                    <div className="sub-title">Si deseas ver más de nuestro trabajo o contactarte con nosotros accede a nuestras redes sociales</div>
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
