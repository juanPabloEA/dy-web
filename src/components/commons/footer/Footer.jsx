import React from 'react';
import './Footer.css';
import {FaInstagram, FaFacebook, FaWhatsapp} from "react-icons/fa";

/**
 * 
 * TODO:
 * - redesign footer.
 */

const Footer=() => {
	return (
		<>
			<div className="content-footer">
				<div className="social-media-title">
					<h4>Redes Sociales</h4>
				</div>
				<div className="social-media-links">
					<div>
						<FaInstagram/> Instagram
					</div>
					<div>
						<FaFacebook/> Facebook
					</div>
					<div>
						<FaWhatsapp/> Whatsapp
					</div>
				</div>
			</div>
			<div className="dev-information">
				dev-info
			</div>
		</>
	);
}

export default Footer;
