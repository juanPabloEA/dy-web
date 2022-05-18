import React from 'react';
import './InpSelect.css';

const InpSelect = ({name, value, subValue,check}) => {
    let checked = check == 'true';
    return (
        <div className="InpSelect">
            {value} <div className="sub-title">{subValue}</div>
            <input type="radio" name={name} value={value} checked={checked}/>
            <span className="checkmark"></span>
        </div>
    );
}

export default InpSelect;