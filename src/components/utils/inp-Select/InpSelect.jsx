import React from 'react';
import './InpSelect.css';

export default class InpSelect extends React.Component {
    constructor(props, {setCkecked}) {
        super(props); 
    }  

    render() {
         return ( 
             <label className="InpSelect" onClick={this.props?.setCkecked(this.props)} >
            {this.props.name}
        <input type="checkbox" id={this.props.value} name={this.props.name}
            value={this.props.value} defaultChecked={this.props.checked}
            />
            <span className="checkmark"></span>
        </label>
    );
    }

}   



