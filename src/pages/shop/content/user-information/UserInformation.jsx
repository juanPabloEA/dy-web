import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import './UserInformation.css'

import InpSelect from './../../../../components/utils/inp-select/InpSelect.jsx'


import { getUser } from './../../../../store/shop/shop.selector.jsx'
import { setUser, setDelivery, setPhone, setAddress, setComments, setOrderDate } from './../../../../store/shop/shop.slice.jsx'

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
    const handleOnChangeOrderDate = (value) => {
        dispatch(setOrderDate(value.target.value))
    }
   return (
        <div className="UserForm">
            <div className="name">
                <UserName name={user.name} handleOnChange={handleOnChangeName}/>
            </div>
            <div className="phone">
                <UserPhone phone={user.phone} handleOnChange={handleOnChangePhone}/>
            </div>
            <div className="orderDate">
                <UserOrderDate orderDate={user.orderDate} handleOnChange={handleOnChangeOrderDate}/>
            </div>
            <div className="delivery">
                <UserDelivery delivery={user.delivery} handleOnChange={handleOnChangeDelivery}/>
            </div>
            { user.delivery &&
                <div className={`address animate__animated ${ user.delivery ? "animate__fadeInDown" : "animate__fadeOutUp" }`} > 
                    <UserAddress address={user.address} handleOnChange={handleOnChangeAddress}/>
                </div>
            }
            <div className="comments">
                <UserComments comments={user.comments} handleOnChange={handleOnChangeComments}/>
            </div>
        </div>
    ) 
}
function UserName({name, handleOnChange}) {
    return (
        <div className="label">
            <div>Nombre: </div>
            <input placeholder="Maria Teresa ..." type="Text" value={name} onChange={handleOnChange}/>
        </div>
       
    )
}

function UserPhone({phone, handleOnChange}) {
    return (
        <div className="label">
            <div> Numero: </div> 
            <input type="Text" placeholder="+56 9 9317 5141" value={phone} onChange={handleOnChange}/>
        </div>

       
    )
}

function UserDelivery({delivery, handleOnChange}) {
    return (
        <InpSelect name="Delivery:"  checked={delivery} setChecked={handleOnChange} />
    )
}

function UserAddress({address, handleOnChange}) {
    return (
        <div className="label">
            <div>Direccion: </div>
            <input type="text" id="phone" name="phone" pattern="[+]{1}[0-9]{11,14}" placeholder="Jose Zapiola #1970" value={address} onChange={handleOnChange}/>
        </div> 
       
    )
}

function UserOrderDate({orderDate, handleOnChange}) {
    return (
        <div className="label">
            <div>Fecha de encargo: </div>
            <input type="date" id="orderDate" pattern="\d{4}-\d{2}-\d{2}"  name="orderDate" value={orderDate} onChange={handleOnChange}/>
        </div>
    )
}

function UserComments({comments, handleOnChange}) {
    return (
        <div className="label comments">
            <div>Observaciones: </div> 
            <textarea name="textarea" placeholder='mensaje "Feliz cumpleaños ..." con la tematica de ...' rows="5" cols="140" value={comments} onChange={handleOnChange}/>
        </div>
    )
}
