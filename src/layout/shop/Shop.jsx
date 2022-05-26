import React from 'react';
import './Shop.css';
import InpRadio from '../../components/utils/inp-radio/InpRadio';
import InpSelect from '../../components/utils/inp-select/InpSelect';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import shopConf from "../../assets/conf/shop.conf.json";
import Options from "./content/options/Options.jsx"


export default class Shop extends React.Component {
    constructor(props) {
        super(props);
        let currentOptions = shopConf.shop.filter(shopconf => shopconf.id === 1);
        this.state = {
            pages: shopConf.shop.length, 
            options: currentOptions[0],
            currentPage: 1,
            minPage: true,
            maxPage: false
        };
    }

    nextPage(){
        this.state.currentPage = this.state.currentPage += 1;
    }

    previusPage(){
        this.state.currentPage = this.state.currentPage -= 1;
    }

    configMaxAndMinPage() {
        this.state.minPage = this.state.currentPage <= 1;
        this.state.maxPage = this.state.currentPage >= this.state.pages;
    }
    setShopOptionByCurrentPage() {
        let currentOptions = shopConf.shop.filter(shopconf => shopconf.id === this.state.currentPage);
        this.setState(prevState => ({
             options: currentOptions[0]}))
    }
    
    getContentByCurrentPage(){
        console.log("this.state.options.id", typeof this.state.options.id) 
        switch(this.state.options.id) {
            case 1:
                return <Options 
                    key={this.state.options.id} 
                    opt={this.state.options}/>
            case 2:
                return <Options 
                    key={this.state.options.id} 
                    opt={this.state.options}/>

            case 3:
                return <Options 
                    key={this.state.options.id} 
                    opt={this.state.options}/>
            default:
                return  <div>non page!</div>
        }
        
    }
    render() { 
        return (
        <div className="Shop">
            <div className="title">
                {this.state.options?.title}
            </div>
            <div className="content">
                {this.getContentByCurrentPage()} 

            </div>
            <div className="actions">
                <div className="back" disabled={this.state.minPage}>
                    <div className="text" 
                         onClick={ () => {if(!this.state.minPage){this.previusPage(); this.setShopOptionByCurrentPage(); this.configMaxAndMinPage()}}}>
                        <FaAngleLeft />
                        Atrás
                    </div>
                </div>
                <div className="page">
                    {this.state.currentPage}/{this.state.pages}
                </div>
                <div className="next" disabled={this.state.maxPage}>
                    <div className="text"
                         onClick={() => {if(!this.state.maxPage){this.nextPage(); this.setShopOptionByCurrentPage(); this.configMaxAndMinPage()}}}>
                        Siguiente
                        <FaAngleRight />
                    </div>
                </div>
            </div>
        </div>
    );
}}


