import React from 'react';
import './Footer.css';
import {FaHome, FaRegImage, FaRegIdCard, FaShoppingBasket} from "react-icons/fa";

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
					<FaHome/>
				</div>
				<div className="gallery-opt">
					<FaRegImage/>
				</div>
				<div className="contact-opt">
					<FaRegIdCard/>
				</div>
				<div className="buy-opt">
					<FaShoppingBasket/>
				</div>
			</div>
		</>
	);
}

export default Footer;
