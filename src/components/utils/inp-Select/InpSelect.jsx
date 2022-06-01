import React from 'react';
import './InpSelect.css';

export default class InpSelect extends React.Component {
    constructor(props) {
        super(props);
    } 
    
    handleChange(event) {
        this.state.setChecked(!event.target.checked);
        console.log(event.target);
        console.log(event.target.checked);
    }
    render() {
         return (
             <div className="InpSelect" onClick={()=> {this.props.checked = !this.props.checked}}>
            {this.props.name}
        <input type="checkbox" id={this.props.value} name={this.props.name}
            value={this.props.value} defaultChecked={this.props.checked} />
            <span className="checkmark"></span>
        </div>
    );
    }

}   



