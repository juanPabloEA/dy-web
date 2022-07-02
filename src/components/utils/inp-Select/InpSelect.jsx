import React from 'react';
import './InpSelect.css';

export default class InpSelect extends React.Component {
    
    render() {
         return ( 
             <label className={`InpSelect ${ this.props.disable ? "disabled" : "" }`} > 
                {this.props.name}
                <input type="checkbox" id={this.props.val} name={this.props.name} checked={this.props.checked} onChange={this.props.setChecked}/>
                <span className="checkmark"></span>
            </label>
    );
    }

}
