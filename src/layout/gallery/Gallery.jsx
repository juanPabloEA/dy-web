import React from 'react';
import './Gallery.css';
import Product from './../../components/commons/product/Product';
import traditionalPicture from '../../assets/img/categories/fondant-02.jpeg';
import figuresPicture from '../../assets/img/categories/figures.jpeg';
import eventsPicture from '../../assets/img/categories/eventos_03.jpeg';
import varPicture from '../../assets/img/categories/traditional.jpeg';

const Gallery = () => {
    return (
        <>
            <div className="Gallery">
                <div className="card animate__animated animate__fadeInUp">
                    <Product picture={traditionalPicture} title="Clasicas" />
                </div>
                <div className="card animate__animated animate__fadeInUp">
                    <Product picture={figuresPicture} title="Figuras de fondant" />
                </div>
                <div className="card animate__animated animate__fadeInUp">
                    <Product picture={eventsPicture} title="Eventos" />
                </div>
                <div className="card animate__animated animate__fadeInUp">
                    <Product picture={varPicture} title="A tú gusto" />
                </div>
            </div>
        </>
    );
}

export default Gallery;