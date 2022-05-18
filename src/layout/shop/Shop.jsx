import React from 'react';
import './Shop.css';
import InpRadio from '../../components/utils/inp-radio/InpRadio';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const Shop = () => {
    return (
        <>
            <div className="Shop">
                <div className="title">
                    Bizcocho
                </div>
                <div className="content">
                    <InpRadio/>
                </div>
                <div className="actions">
                    <div className="back">
                        <div className="text">
                            <FaAngleLeft />
                            Atrás
                        </div>
                    </div>
                    <div className="page">
                        1/5
                    </div>
                    <div className="next">
                        <div className="text">
                            Siguiente
                            <FaAngleRight />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Shop;