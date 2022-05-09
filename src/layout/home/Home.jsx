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
        <div className="card">
          <div className="image animate__animated animate__fadeInDown">
            <img src={homePicture}></img>
          </div>
          <div className="description animate__animated animate__fadeInDown">
            <div className="title">Tortas</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
