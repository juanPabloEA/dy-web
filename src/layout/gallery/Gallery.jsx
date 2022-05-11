import React from 'react';
import './Gallery.css';
import Product from './../../components/commons/product/Product';
import homePicture from '../../assets/img/home-image.jpeg';

const Gallery = () => {
    return (
        <div className="Gallery">
            <div className="traditional">
                <Product homePicture={homePicture} title="Tradicional"/>
            </div>
            <div className="fondant">
                <Product homePicture={homePicture} title="Tradicional"/>
            </div>
        </div>
    );
}

export default Gallery;