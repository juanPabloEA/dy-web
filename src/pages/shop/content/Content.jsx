import React from 'react'
import Options from "./options/Options.jsx"

export default class Content extends React.Component {

    getContentByCurrentPage() { 
        switch(this.props.options.id) {
            case 1:
            case 2:
            case 3:
            case 4:
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
