import React from 'react';
import homePicture from '../../assets/img/image-home.png'
import {Link} from "react-router-dom"
import './Home.css';

/**
 * 
 * TODO:
 *  - editar imagen.
 *  - modificar la posicion de los botones.
 * 
 */
const Home = () => {
  return (
    <>
      <div className="home-picture">
        <div className="card">
          <div className="title">Tortas</div>
          <img src={homePicture}></img>
        </div>
        
      </div>
      <div className="home-options">
          <div className="gallery-option">
            <Link to="contact">
              <button type="button" className="gallery">Contacto</button> 
            </Link>
          </div>
          <div className="button-option">
            <button type="button" className="pedido">Pedido</button>
          </div>
      </div>
    </>
  );
}

export default Home;
