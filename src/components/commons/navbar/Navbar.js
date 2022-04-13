import React from 'react';
import {  Link } from "react-router-dom";
import './Navbar.css';
const Navbar= () =>{
  return (
    <div className="Navbar-container">
      <div className="Navbar-icon">
        <Link to="/">
          <h1>
          hello logo
          </h1> 
        </Link>
      </div>
    </div>
  );
}
export default Navbar;