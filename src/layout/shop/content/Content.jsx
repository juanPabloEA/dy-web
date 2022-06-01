import React from 'react'
import Options from "./options/Options.jsx"

export default class Content extends React.Component {
    constructor(props) {
        super(props)
    }

    getContentByCurrentPage() { 
        switch(this.props.options.id) {
            case 1:
                return <Options 
                    key={this.props.options.id} 
                    opt={this.props.options}/>
            case 2:
                return <Options 
                    key={this.props.options.id} 
                    opt={this.props.options}/>

            case 3:
                return <Options 
                    key={this.props.options.id} 
                    opt={this.props.options}/>
            default:
                return  <div>non page!</div>
        }
        
    }

    render() {
        return (
            <div className="Content">
                {this.getContentByCurrentPage()}
            </div>
        )
    }
} 
