import React from 'react'
import CakeOptions from "./cake-options/CakeOptions.jsx"

import {setcakebiz, setcakesize, setcakecover, setcakerelleno} from "../../../store/shop/shop.slice.jsx"

export default class Content extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {}
    }
    
    getContentByCurrentPage() { 
            switch(this.props?.options?.id) {
            case 0:
                return <CakeOptions
                    setCakeAction ={setcakesize}
                    key={this.props.options.id} 
                    opt={this.props.options}/> 

            case 1:
                return <CakeOptions
                    setCakeAction ={setcakebiz}
                    key={this.props.options.id} 
                    opt={this.props.options}/> 

            case 2:
                return <CakeOptions
                    setCakeAction ={setcakecover}
                    key={this.props.options.id} 
                    opt={this.props.options}/> 

            case 3:
                return <CakeOptions
                    setCakeAction ={setcakerelleno}
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
