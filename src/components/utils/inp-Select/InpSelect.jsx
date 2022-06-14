import React from 'react';
import './InpSelect.css';

export default class InpSelect extends React.Component {
    constructor(props, {setCkecked}) {
        super(props); 
    }  

    render() {
         return ( 
             <label className={`InpSelect ${ this.props.disable ? "disabled" : "" }`} > 
                {this.props.name}
                <input type="checkbox" id={this.props.value} name={this.props.name}
                    value={this.props.value} checked={this.props.checked} onChange={this.props?.setCkecked}/>
                <span className="checkmark"></span>
            </label>
    );
    }

}
