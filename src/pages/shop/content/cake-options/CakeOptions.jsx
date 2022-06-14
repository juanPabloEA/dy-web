import React from 'react'
import './CakeOptions.css'
import {useDispatch, useSelector} from 'react-redux'
import InputSelect from "../../../../components/utils/inp-select/InpSelect.jsx"
import { configuredisableoption } from "../../../../store/shop/shop.slice.jsx"
import { getCurrentSelectCakeOption } from "../../../../store/shop/shop.selector.jsx"

export default function CakeOptions(props) {
    const dispatch = useDispatch();
    const currentCakeOptions = useSelector(getCurrentSelectCakeOption)
        
    function getOptionList() {
        return currentCakeOptions.map(option => {
            return <InputSelect
                key={option.id}
                name={option.title} 
                value={option.id}
                disable={option.disable}
                checked={option.status}
                setCkecked={passCallBackFuntion}
                />
        });
    }

    function passCallBackFuntion(event) {
        dispatch(props.setCakeAction(event.target.id))
        dispatch(configuredisableoption())
    }

    return (<div>{getOptionList()}</div>)
}
