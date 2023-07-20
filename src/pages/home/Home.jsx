import React from 'react';
import homePicture from '../../assets/img/image-home.png'
import Gallery from './../gallery/Gallery';
import './Home.css';

const Home = () => {
  return (
    <>
      <div className="home-picture">
        <div className="card animate__animated animate__zoomIn">
          <div className="image animate__animated animate__fadeInDown">
            <img src={homePicture} alt=""></img>
          </div>
          <div className="description animate__animated animate__fadeInDown">
            <div className="title">Delicias de la Yoya</div>
            <div className="body">Nuestras tortas caseras son creadas con un diseño único para cada ocasión especial. Deleita tus sentidos con nuestros exquisitos sabores y presentaciones únicas en cada momento importante. ¡Descubre una experiencia dulce y personalizada que dejará una huella memorable en tus momentos más especiales!.</div>
          </div>
        </div>
      </div>
      <Gallery/>
    </>
  );
}

export default Home;
