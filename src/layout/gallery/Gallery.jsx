import React from 'react';
import './Gallery.css';
import Product from './../../components/commons/product/Product';
import traditionalPicture from '../../assets/img/categories/fondant-02.jpeg';
import figuresPicture from '../../assets/img/categories/figures.jpeg';
import eventsPicture from '../../assets/img/categories/eventos_03.jpeg';
import varPicture from '../../assets/img/categories/traditional.jpeg';

window.onbeforeunload = function(e){
    console.log('bye bye');
    document.getElementsByClassName('myDiv').item(0).className = 'animate__bounceOut';
}

const Gallery = () => {
    return (
        <>
            <div className="Gallery">
                <div className="traditional animate__animated animate__zoomIn">
                    <Product picture={traditionalPicture} title="Clasicas" />
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
                    <Product picture={varPicture} title="A tú gusto" />
                </div>
            </div>
        </>
    );
}

export default Gallery;