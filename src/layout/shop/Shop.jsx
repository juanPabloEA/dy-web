import React from 'react';
import './Shop.css';
import InpRadio from '../../components/utils/inp-radio/InpRadio';
import InpSelect from '../../components/utils/inp-select/InpSelect';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import shopConf from "../../assets/conf/shop.conf.json";



export default class Shop extends React.Component {
    constructor(props) {
        super(props);
        let currentOptions = shopConf.cake.filter(shopconf => shopconf.id == 1);
        this.state = {
            pages: 5, 
            options: currentOptions[0],
            currentPage: 1,
            minPage: true,
            maxPage: false
        };
    }

    nextPage(){
        console.info("nextPage", this.state.currentPage);
        this.state.currentPage = this.state.currentPage += 1;
    }

    previusPage(){
        console.log("previusPage", this.state.currentPage);
        this.state.currentPage = this.state.currentPage -= 1;
    }

    configMaxAndMinPage() {
        this.state.minPage = this.state.currentPage <= 1;
        this.state.maxPage = this.state.currentPage >= this.state.pages;
    }
    setShopOptionByCurrentPage() {
        let currentOptions = shopConf.cake.filter(shopconf => shopconf.id == this.state.currentPage);
        this.setState(prevState => ({
             options: currentOptions[0]}))
    }
    render() { 
        return (
        <div className="Shop">
            <div className="title">
                {this.state.options?.title}
            </div>
            <div className="content">
                <InpSelect name="bis" value="One" subValue="One description" check="false" />
                <InpSelect name="bis" value="Two" subValue="Two description" check="false" />
                <InpSelect name="bis" value="Three" subValue="Three description" check="true" />
                <InpSelect name="bis" value="Four" subValue="Four description" check="false" />
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


