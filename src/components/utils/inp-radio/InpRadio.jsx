import React from 'react';
import './InpRadio.css';

const InpRadio = ({name, value, check}) => {
    let checked = check == 'true';
    return (
        <div className="InpRadio">
            {value}
            <input type="radio" name={name} value={value} checked={checked}/>
            <span className="checkmark"></span>
        </div>
    );
}

export default InpRadio;