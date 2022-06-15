import React from 'react'
import './CakeOptions.css'
import {useDispatch, useSelector} from 'react-redux'
import InputSelect from "../../../../components/utils/inp-select/InpSelect.jsx"
import { configuredisableoption, setcheckoption, configureenableoption } from "../../../../store/shop/shop.slice.jsx"
import { getCurrentSelectCakeOption, getCountSelectByCurrentOption } from "../../../../store/shop/shop.selector.jsx"

export default function CakeOptions(props) {
    const dispatch = useDispatch();
    const currentCakeOptions = useSelector(getCurrentSelectCakeOption)
    const countSelect = useSelector(getCountSelectByCurrentOption)


    function getOptionList() {
        return currentCakeOptions.map(option => {
            return <InputSelect
                key={option.id}
                name={option.title} 
                value={option.id}
                disable={option.disable}
                checked={option.checked}
                setCkecked={passCallBackFuntion}
                />
        });
    }

    function passCallBackFuntion(event) {
        const cakeoption = {
            id: event.target.id,
            checked: event.target.checked,
        } 
        dispatch(setcheckoption(cakeoption))
        dispatch(configuredisableoption({
            maxSelect: props.maxSelect
        }))

    }

    return (<div>{getOptionList()}</div>)
}
