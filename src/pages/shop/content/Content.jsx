import React from 'react'
import CakeOptions from "./cake-options/CakeOptions.jsx"
import UserInformation from './user-information/UserInformation.jsx'
import RequestOrderPreview from './request-order-preview/RequestOrderPreview.jsx'
import CakeSize from './cake-size/CakeSize.jsx'
export default class Content extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {}
    }
    
    getContentByCurrentPage() { 
            switch(this.props?.options?.id) {
            case 0:
                return <CakeSize opt={this.props.options}/> 

            case 1:
                return <CakeOptions maxSelect={1} opt={this.props.options}/> 

            case 2:
                return <CakeOptions maxSelect={1} opt={this.props.options}/> 

            case 3:
                return <CakeOptions maxSelect={3} opt={this.props.options}/> 
            
            case 4:
                return <UserInformation/>
            
            case 5:
                return <RequestOrderPreview/>
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
