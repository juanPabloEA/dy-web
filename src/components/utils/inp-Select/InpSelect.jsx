import React from 'react';
import './InpSelect.css';

export default class InpSelect extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            name: props.name,
            checked: false,
            value: props.value
        }
    }
    handleChange(event) {
        this.state.setChecked(!event.target.checked);
        console.log(event.target);
        console.log(event.target.checked);
    }

    render() {
         return (
        <div className="InpSelect">
            {this.state.name}
        <input type="checkbox" id={this.state.value} name={this.state.name}
            value={this.state.value} 
            />
            <span className="checkmark"></span>
        </div>
    );
    }

}   



