import React from 'react'
import './Options.css'

export default class Options extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
    }
    render(){
        return (<div>hello options {this.props.opt.id}</div>)
    }
}
