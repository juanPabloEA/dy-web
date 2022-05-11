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
                <div className="traditional animate__animated animate__zoomIn">
                    <Product picture={traditionalPicture} title="Tradicional" />
                </div>
                <div className="fondant animate__animated animate__zoomIn">
                    <Product picture={figuresPicture} title="Figuras de fondant" />
                </div>
            </div>
            <div className="Gallery">
                <div className="traditional animate__animated animate__zoomIn">
                    <Product picture={eventsPicture} title="Eventos" />
                </div>
                <div className="fondant animate__animated animate__zoomIn">
                    <Product picture={varPicture} title="Personalizadas" />
                </div>
            </div>
        </>
    );
}

export default Gallery;