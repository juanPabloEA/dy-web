import React from 'react'
import './Options.css'
import InputSelect from "../../../../components/utils/inp-select/InpSelect.jsx"
export default class Options extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            opt: props.opt
        }
    }
    getOptionList() {
        return this.state?.opt?.content?.options?.map(option => {
            return <InputSelect
                key={option.id}
                name={option.title} 
                value={option.id}
                />
        });

    }

    render() {
        return (<div>{this.getOptionList()}</div>)
    }
}
