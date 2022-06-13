import React from 'react'
import './CakeOptions.css'
import InputSelect from "../../../../components/utils/inp-select/InpSelect.jsx"

export default class CakeOptions extends React.Component {

    getOptionList() {
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
        console.log("passCallBackFuntion", event)
    }

    render() {
        return (<div>{this.getOptionList()}</div>)
    }
}
