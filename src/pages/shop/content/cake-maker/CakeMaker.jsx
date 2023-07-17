import React from 'react';
import './CakeMaker.css';
import { ReactComponent as CakePortion } from "./../../../../assets/img/cake/cake.svg";

export default function CakeMaker(props) {
    
    return (
        <div className="CakeMaker">
            <CakePortion/>
        </div>
    );
}