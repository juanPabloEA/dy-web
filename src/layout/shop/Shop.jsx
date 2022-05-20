import React from 'react';
import './Shop.css';
import InpRadio from '../../components/utils/inp-radio/InpRadio';
import InpSelect from '../../components/utils/inp-select/InpSelect';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const Shop = () => {
    return (
        <div className="Shop">
            <div className="title">
                Bizcocho
            </div>
            <div className="content">
                <InpSelect name="bis" value="One" subValue="One description" check="false" />
                <InpSelect name="bis" value="Two" subValue="Two description" check="false" />
                <InpSelect name="bis" value="Three" subValue="Three description" check="true" />
                <InpSelect name="bis" value="Four" subValue="Four description" check="false" />
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
    );
}

export default Shop;