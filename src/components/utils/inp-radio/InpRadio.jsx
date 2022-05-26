import React from 'react';
import './InpRadio.css';

const InpRadio = ({name, value, subValue,check}) => {
    let checked = check == 'true';
    return (
        <div className="InpRadio">
            {value} <div className="sub-title">{subValue}</div>
            <input type="radio" name={name} value={value} checked={checked}/>
            <span className="checkmark"></span>
        </div>
    );
}

export default InpRadio;