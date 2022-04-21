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
			<div className="dev-information">
				@Copyright {year} <a href="https://github.com/juanPabloEA"> jpabloea </a>
			</div>
		</>
	);
}

export default Footer;
