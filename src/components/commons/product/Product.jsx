import React from 'react';
import './Product.css';

const Product = ({homePicture, title}) => {
    return (
        <div className="product-card">
            <div className="head">
                <img src={homePicture}></img>
            </div>
            <div className="content">
                <div className="titulo">{title}</div>
            </div>
        </div>
    );
}

export default Product;