import { createSlice } from '@reduxjs/toolkit'
import { NEXT_PAGE,
  PREVIUS_PAGE,
  SET_MIN_AND_MAX_PAGE,
  CONFIGURE_DISABLE_OPTION,
  SET_CHECK_OPTION,
  SET_USER,
  SET_PHONE, 
  SET_DELIVERY,
  SET_ADDRESS,
  SET_COMMENTS, 
} from './shop.actions.jsx'
import { getCakeInitConfig } from '../../api/shop/cake.server.js'

export const name = "shop"

const shop = createSlice({
  name: name,
  initialState: {
    page: {
      number: 6,
      currentSelect: 0,
      minPage: true,
      maxPage: false,
      cakeSizePick: 1,
      cakeBizPick: 1,
      cakeCoverPick: 1,
      cakeRellPick: 3 
    },
    data: getCakeInitConfig(),
    form: {
      user:{
        name: "Juan",
        phone: "",
        delivery: true, 
        address: "",
        comments: "",
      }
    }
  },
  reducers: {
    nextPage: NEXT_PAGE,
    previusPage: PREVIUS_PAGE,
    setMinAndMaxPage: SET_MIN_AND_MAX_PAGE, 
    configureDisableOption: CONFIGURE_DISABLE_OPTION,
    setCheckOption: SET_CHECK_OPTION, 
    setUser: SET_USER,
    setPhone: SET_PHONE, 
    setDelivery: SET_DELIVERY,
    setAddress: SET_ADDRESS,
    setComments: SET_COMMENTS,
  }
  })

export const { configureDisableOption, 
  nextPage,
  previusPage,
  setMinAndMaxPage,
  setCheckOption,
  setUser,
  setPhone,
  setDelivery,
  setAddress,
  setComments,
}  = shop.actions 

export default shop.reducer;

