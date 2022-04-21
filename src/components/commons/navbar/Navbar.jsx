import React from 'react';
import {  Link } from "react-router-dom";
import Sidebar from "./../sidebar/Sidebar"
import logo from "./../../../assets/img/logo.jpeg";
import './Navbar.css';
import { FaAlignRight } from "react-icons/fa";

const Navbar = () => {
  function activeMenu(e) {
    document.querySelector('.phone').classList.toggle('active')
  }
  return (
    <div className="Navbar-container">
      <div className="Navbar-icon">
        <Link to="/">
          <img src={logo}></img>
        </Link>
      </div>
      <div className="Navbar-options">
          <FaAlignRight onClick={activeMenu}/>
      </div>
    </div>
  );
}

export default Navbar;
