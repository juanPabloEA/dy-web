import React from 'react';
import homePicture from '../../assets/img/image-home.png'
import { Link } from "react-router-dom"
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
        <div className="card animate__animated animate__fadeInDown">
          <div className="image">
            <img src={homePicture}></img>
          </div>
          <div className="description">
            <div className="title">Tortas</div>
          </div>
        </div>
      </div>
      <div className="home-options animate__animated animate__fadeIn">
        <div className="gallery-option">
          <Link to="contact">
            <div type="button" className="gallery">Contacto</div>
          </Link>
        </div>
        <div className="button-option">
          <div type="button" className="pedido">Pedido</div>
        </div>
      </div>
    </>
  );
}

export default Home;
