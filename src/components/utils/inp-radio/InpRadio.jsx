import React from 'react';
import './InpRadio.css';

const InpRadio = () => {
    return (
        <div className="InpRadio">
            <input type="radio" id="html" name="fav_language" value="HTML"/>
            <label for="html">HTML</label><br/>
        </div>
    );
}

export default InpRadio;