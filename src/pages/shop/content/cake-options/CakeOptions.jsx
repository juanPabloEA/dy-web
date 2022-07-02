import React from 'react'
import './CakeOptions.css'
import {useDispatch, useSelector} from 'react-redux'
import InputSelect from "../../../../components/utils/inp-select/InpSelect.jsx"
import { configureDisableOption, setCheckOption} from "../../../../store/shop/shop.slice.jsx"
import { getCurrentSelectCakeOption } from "../../../../store/shop/shop.selector.jsx"

export default function CakeOptions(props) {
    const dispatch = useDispatch();
    const currentCakeOptions = useSelector(getCurrentSelectCakeOption)

    function getOptionList() {
        return currentCakeOptions.map(option => {
            return <InputSelect
                key={option.id}
                val={option.id}
                name={option.title} 
                disable={option.disable}
                checked={option.checked}
                setChecked={passCallBackFuntion}
                />
        });
    }

    function passCallBackFuntion(event) {
        const cakeoption = {
            id: event.target.id,
            checked: event.target.checked,
        } 
        dispatch(setCheckOption(cakeoption))
        dispatch(configureDisableOption({
            maxSelect: props.maxSelect
        }))

    }

    return (<div>{getOptionList()}</div>)
}
