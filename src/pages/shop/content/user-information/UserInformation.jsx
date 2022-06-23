import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import './UserInformation.css'

import InpSelect from './../../../../components/utils/inp-select/InpSelect.jsx'


import { getUser } from './../../../../store/shop/shop.selector.jsx'
import { setUser, setDelivery, setPhone, setAddress, setComments } from './../../../../store/shop/shop.slice.jsx'

export default function UserInformation () {
    const dispatch = useDispatch()
    const user = useSelector(getUser)

    const handleOnChangeName = (value) => {
        dispatch(setUser(value.target.value))
    }
    const handleOnChangePhone = (value) => {
        dispatch(setPhone(value.target.value))
    }

    const handleOnChangeDelivery = (value) => {
        dispatch(setDelivery(value.target.checked))
    }
    const handleOnChangeAddress = (value) => {
        dispatch(setAddress(value.target.value))
    }
    const handleOnChangeComments = (value) => {
        dispatch(setComments(value.target.value))
    }

    return (
        <div className="UserForm">
            <div className="name">
                <UserName name={user.name} handleOnChange={handleOnChangeName}/>
            </div>
            <div className="phone">
                <UserPhone phone={user.phone} handleOnChange={handleOnChangePhone}/>
            </div>
            <div className="delivery">
                <UserDelivery delivery={user.delivery} handleOnChange={handleOnChangeDelivery}/>
            </div>
            <div className="address">
                <UserAddress address={user.address} handleOnChange={handleOnChangeAddress}/>
            </div>
            <div className="comments">
                <UserComments comments={user.comments} handleOnChange={handleOnChangeComments}/>
            </div>
        </div>
    ) 
}

function UserName({name, handleOnChange}) {
    return (
        <label>
        Nombre: 
            <input type="Text" value={name} onChange={handleOnChange}/>
        </label>
    )
}

function UserPhone({phone, handleOnChange}) {
    return (
        <label>
        Numero: 
            <input type="Text" value={phone} onChange={handleOnChange}/>
        </label>
    )
}

function UserDelivery({delivery, handleOnChange}) {
    return (
            <InpSelect name="Delivery" checked={delivery} setChecked={handleOnChange} />
    )
}

function UserAddress({address, handleOnChange}) {
    return (
        <label>
        Direccion: 
            <input type="Text" value={address} onChange={handleOnChange}/>
        </label>
    )
}

function UserComments({comments, handleOnChange}) {
    return (
       <label>
        Observaciones: 
            <input type="Text" value={comments} onChange={handleOnChange}/>
        </label>

    )
}
