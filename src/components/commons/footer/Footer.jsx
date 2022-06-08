import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom";
import {FaHome, FaWhatsapp, FaShoppingBasket} from "react-icons/fa";

const Footer = () => {
	return (
		<>
			<div className="interaction">
				<div className="home-opt">
					<Link to="/">
						<FaHome/>
					</Link>
				</div>
				<div className="contact-opt">
					<Link to="contact">
						<FaWhatsapp/>
					</Link>
				</div>
				<div className="buy-opt">
					<Link to="shop">
						<FaShoppingBasket/>
					</Link>
				</div>
			</div>
		</>
	);
}

export default Footer;
