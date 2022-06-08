import React from 'react';
import './Shop.css';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import Content from "./content/Content.jsx"
import { useSelector,  useDispatch} from 'react-redux'
import { nextpage, previuspage } from '../../store/shop/shop.slice.jsx'
import { getShop, getCurrentSelectShop } from '../../store/shop/shop.selector.jsx'


export default function Shop() {
    const dispatch = useDispatch()
    const shopConf = useSelector(getShop)
    const currentShopOption = useSelector(getCurrentSelectShop)
    
    const nextPage = () => {
        dispatch(nextpage())
    }
    const previusPage = () => {
        dispatch(previuspage())
    }
    return (
        <div className="Shop">
            <div className="title">
                {currentShopOption?.title}
            </div>
            <div className="content">
                <Content options={currentShopOption}/> 

            </div>
            <div className="actions">
                <div className="back" disabled={shopConf.minPage}>
                    <div className="text" 
                        onClick={previusPage}>
                        <FaAngleLeft />
                        Atrás
                    </div>
                </div>
                <div className="page">
                    {shopConf.currentSelect + 1}/{shopConf.options.length}
                </div>
                <div className="next" disabled={shopConf.maxPage}>
                    <div className="text"
                        onClick={nextPage}>
                        Siguiente
                        <FaAngleRight />
                    </div>
                </div>
            </div>
        </div>
    );
}


