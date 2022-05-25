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
        this.state = {pages: 5, options: currentOptions[0], currentPage: 1 };
        this.setShopOptionByCurrentPage = this.setShopOptionByCurrentPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.previusPage = this.previusPage.bind(this);
    }

    nextPage(){
        console.log("click nextState", this.state.currentPage);
        this.state.currentPage = this.state.currentPage += 1;
    }

    previusPage(){
        console.log("click prevState", this.state.currentPage);
        this.state.currentPage = this.state.currentPage -= 1;
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
                <div className="back">
                    <div className="text" onClick={ () => {this.previusPage(); this.setShopOptionByCurrentPage()}}>
                        <FaAngleLeft />
                        Atrás
                    </div>
                </div>
                <div className="page">
                    {this.state.currentPage}/{this.state.pages}
                </div>
                <div className="next">
                    <div className="text" onClick={() => {this.nextPage(); this.setShopOptionByCurrentPage()}}>
                        Siguiente
                        <FaAngleRight />
                    </div>
                </div>
            </div>
        </div>
    );
}}


