import React from 'react';
import './Shop.css';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import Content from "./content/Content.jsx"
import { useSelector,  useDispatch} from 'react-redux'
import { nextPage, previusPage, setMinAndMaxPage } from '../../store/shop/shop.slice.jsx'
import { getShop, getCurrentSelectShop, disableNextPage } from '../../store/shop/shop.selector.jsx'


export default function Shop() {
    const dispatch = useDispatch()
    const shopConf = useSelector(getShop)
    const currentShopOption = useSelector(getCurrentSelectShop)
    const disNextPage = useSelector(disableNextPage)
    
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
           
            <div className="content">
                <Content options={currentShopOption}/> 
            </div>
            <div className="actions">
                <div className="back" disabled={shopConf.page.minPage}>
                    <div className="text back-button" 
                        onClick={shopConf.page.minPage ? undefined : handlePreviusPage}>
                            <span class="arrow"></span>
                    </div>
                </div>
                <div className="title">
                    {currentShopOption?.title}
                </div>
                <div className="next" disabled={shopConf.page.maxPage || disNextPage}>
                    <div className="text next-button"
                        onClick={shopConf.page.maxPage || disNextPage ? undefined : handleNextPage}>
                            <span class="arrow"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}


