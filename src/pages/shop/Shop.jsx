import React from 'react';
import './Shop.css';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import Content from "./content/Content.jsx"
import { useSelector,  useDispatch} from 'react-redux'
import { nextPage, previusPage, setMinAndMaxPage } from '../../store/shop/shop.slice.jsx'
import { getShop, getCurrentSelectShop } from '../../store/shop/shop.selector.jsx'


export default function Shop() {
    const dispatch = useDispatch()
    const shopConf = useSelector(getShop)
    const currentShopOption = useSelector(getCurrentSelectShop)

    const handleNextPage = () => {
        dispatch(nextPage())
        dispatch(setMinAndMaxPage())
    }
   
    const handlePreviusPage = () => {
        dispatch(previusPage())
        dispatch(setMinAndMaxPage())
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
                <div className="back" disabled={shopConf.page.minPage}>
                    <div className="text" 
                        onClick={shopConf.page.minPage ? undefined : handlePreviusPage}>
                        <FaAngleLeft />
                        Atrás
                    </div>
                </div>
                <div className="page">
                    {shopConf.page.currentSelect + 1}/{shopConf.page.number}
                </div>
                <div className="next" disabled={shopConf.page.maxPage}>
                    <div className="text"
                        onClick={shopConf.page.maxPage ? undefined : handleNextPage}>
                        Siguiente
                        <FaAngleRight />
                    </div>
                </div>
            </div>
        </div>
    );
}


