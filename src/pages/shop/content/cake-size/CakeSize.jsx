import React from "react";
import { ReactComponent as CakePortion } from "./../../../../assets/img/cake/cake.svg";
import "./CakeSize.css";

export default function CakeSize(props) {

    return (
        <>
            <div className="CakeSize">
                <div className="CakeSize-title">
                    <CakePortion />
                </div>
                <div className="CakeSize-options">
                </div>
            </div>
        </>
    );
}