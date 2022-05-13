import React from 'react';
import './Product.css';

const Product = ({picture, title}) => {
    return (
        <div className="product-card">
            <div className="head">
                <img src={picture}></img>
            </div>
            <div className="content">
                <div className="title">{title}</div>
            </div>
        </div>
    );
}

export default Product;