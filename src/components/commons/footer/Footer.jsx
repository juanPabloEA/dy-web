import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom";
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
					<Link to="/">
						<FaHome/>
					</Link>
				</div>
				<div className="contact-opt">
					<Link to="contact">
						<FaRegIdCard/>
					</Link>
				</div>
				<div className="buy-opt">
					<FaShoppingBasket/>
				</div>
			</div>
		</>
	);
}

export default Footer;
