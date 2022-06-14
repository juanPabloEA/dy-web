import React from 'react'
import './CakeOptions.css'
import InputSelect from "../../../../components/utils/inp-select/InpSelect.jsx"

export default class CakeOptions extends React.Component {

    getOptionList() {
        console.log("CakeOptions - state", this.state)
        console.log("CakeOptions - props", this.props)
        return this.props?.opt?.content?.options?.map(option => {
            return <InputSelect
                key={option.id}
                name={option.title} 
                value={option.id}
                checked={option.status}
                setCkecked={this.passCallBackFuntion.bind(this)}
                />
        });
    }

    passCallBackFuntion(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        const id = target.id;
        
        console.log("target: ", target)
        console.log("value: ", value)
        console.log("name: ", name)
        console.log("id: ", id)
    }

    render() {
        return (<div>{this.getOptionList()}</div>)
    }
}
