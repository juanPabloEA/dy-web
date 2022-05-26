import React from 'react';
import './InpSelect.css';

const InpSelect = ({name, value}) => {
    return (
        <div className="InpSelect">
            {name}
        <input type="checkbox" name={name} value={value}
            />
            <span className="checkmark"></span>
        </div>
    );
}

export default InpSelect;
