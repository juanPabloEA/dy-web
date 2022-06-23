import React from 'react';
import './InpRadio.css';

const InpRadio = ({name, value, subValue, handleOnChange}) => {
    return (
        <div className="InpRadio">
            {value} <div className="sub-title">{subValue}</div>
            <input type="radio" name={name} id={value} onChange={handleOnChange}/>
            <span className="checkmark"></span>
        </div>
    );
}

export default InpRadio;
