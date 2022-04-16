import React from 'react';
import homePicture from '../../assets/img/home-image.jpeg'
import './Home.css';

const Home = () => {
  return (
    <>
      <div className="home-picture">
        <img src={homePicture}></img>
      </div>
      <div className="home-options">
          <div className="gallery-option">
            <button type="button" class="gallery">Galeria</button> 
          </div>
          <div className="button-option">
           <button type="button" class="pedido">Pedido</button>
          </div>
      </div>
    </>
  );
}

export default Home;
