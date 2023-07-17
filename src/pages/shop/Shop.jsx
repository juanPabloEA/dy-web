import React from 'react';
import './Shop.css';
import { FaAngleDown, FaAngleUp, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import CakeMaker from './content/cake-maker/CakeMaker.jsx'
import Content from './content/Content';
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
                <CakeMaker opt={currentShopOption}/>
                <div className="title">
                    {currentShopOption?.title}
                </div>
            </div>
             <div className="options-up">
                    <div className="shop-options-up-icon">
                        <FaAngleUp />
                    </div>
            </div>
            <div className="actions">
                <div className="back" disabled={shopConf.page.minPage}>
                    <div className="text back-button" 
                        onClick={shopConf.page.minPage ? undefined : handlePreviusPage}>
                            <FaAngleLeft />
                    </div>
                </div>
                <div className="shop-options">
                    <Content/>
                </div>
                <div className="next" disabled={shopConf.page.maxPage || disNextPage}>
                    <div className="text next-button"
                        onClick={shopConf.page.maxPage || disNextPage ? undefined : handleNextPage}>
                            <FaAngleRight />
                    </div>
                </div>
            </div>
            <div className="options-down">
                <div className="shop-options-down-icon">
                        <FaAngleDown />
                </div>
            </div>
        </div>
    );
}


