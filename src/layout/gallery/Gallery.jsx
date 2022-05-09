import React from 'react';
import './Gallery.css';
import Product from './../../components/commons/product/Product';


const Gallery = () => {
    return (
        <div className="Gallery">
            <div className="traditional">
                <Product/>
            </div>
            <div className="fondant">
                <Product/>
            </div>
        </div>
    );
}

export default Gallery;