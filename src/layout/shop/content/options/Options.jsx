import React from 'react'
import './Options.css'
import InputSelect from "../../../../components/utils/inp-select/InpSelect.jsx"
export default class Options extends React.Component {
    constructor(props) {
        super(props); 
    }
    getOptionList() {
        return this.props?.opt?.content?.options?.map(option => {
            option.status = false;
            return <InputSelect
                key={option.id}
                name={option.title} 
                value={option.id}
                checked={option.status}
                />
        });

    }

    render() {
        return (<div>{this.getOptionList()}</div>)
    }
}
