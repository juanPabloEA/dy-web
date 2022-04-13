import React from 'react';
import {  Link } from "react-router-dom";
import logo from "./../../../assets/img/logo.jpeg";
import './Navbar.css';
const Navbar= () =>{
  return (
    <div className="Navbar-container">
      <div className="Navbar-icon">
        <Link to="/">
          other 
        </Link>
      </div>
      <div className="Navbar-picture">
        <Link to="/">
          <img src={logo}></img>
        </Link>
      </div>
      <div className="Navbar-icon">
        <Link to="/">
          galley
        </Link>
      </div>
 
    </div>
  );
}
export default Navbar;
