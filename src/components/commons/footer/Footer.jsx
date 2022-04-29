import React from 'react';
import './Footer.css';
import {FaInstagram, FaFacebook, FaWhatsapp} from "react-icons/fa";

/**
 * 
 * TODO:
 * - redesign footer.
 */
const year = new Date().getFullYear();

const Footer=() => {
	return (
		<>
			<div className="interaction">
				<div className="home-opt">
					home
				</div>
				<div className="gallery-opt">
					gellery
				</div>
				<div className="contact-opt">
					contact
				</div>
				<div className="buy-opt">
					buy
				</div>
			</div>
		</>
	);
}

export default Footer;
