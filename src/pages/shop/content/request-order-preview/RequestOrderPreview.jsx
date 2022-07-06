import React from 'react';
import "./RequestOrderPreview.css";
import { useSelector } from 'react-redux';
import { getCurrentQuotation } from '../../../../store/shop/shop.selector';

export default function RequestOrderPreview() {
    const currentQuotation = useSelector(getCurrentQuotation)
    console.log(currentQuotation)
    const currentQuotationString = JSON.stringify(currentQuotation);
    return (
        <>{currentQuotationString}</>
    );
}
