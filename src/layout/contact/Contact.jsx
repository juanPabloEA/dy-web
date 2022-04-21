import React from 'react';
import "./Contact.css";
import {FaInstagram, FaFacebook, FaWhatsapp} from "react-icons/fa";


const Contact = () => {
    return (
        <>
            <div className="item-a">
                
                <button type="button" className="btn-whatsapp"> <FaWhatsapp />  Whatsapp</button>
            </div>
            <div className="item-a">
                <button type="button" className="btn-facebook"><FaFacebook /> Facebook</button>
            </div>
            <div className="item-a">
               
                <button type="button" className="btn-instagram"> <FaInstagram /> instagram</button>
            </div>
        </>
    );
}

export default Contact;