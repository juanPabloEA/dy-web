import React from 'react';
import homePicture from '../../../assets/img/home-image.jpeg'
import './Product.css';

const Product = (data) => {
    return (
        <div className="product-card">
            <div className="head">
                <img src={homePicture}></img>
            </div>
            <div className="content">
                <div className="titulo">Tradicional</div>
            </div>
        </div>
    );
}

export default Product;