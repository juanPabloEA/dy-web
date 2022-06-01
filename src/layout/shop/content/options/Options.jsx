import React from 'react'
import './Options.css'
import InputSelect from "../../../../components/utils/inp-select/InpSelect.jsx"
export default class Options extends React.Component {
    constructor(props) {
        super(props); 
    }
    getOptionList() {
        return this.props?.opt?.content?.options?.map(option => {
            option.status = true;
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
