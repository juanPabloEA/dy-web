import { createSlice } from '@reduxjs/toolkit'
import { previusPage, nextPage, setMinAndMaxPage} from './shop.actions.jsx'
import {getShopInitConfig} from '../../api/shop/shop.server.js'
export const name = "shop"

const shop = createSlice({
  name: name,
  initialState: {
    currentSelect: 0,
    minPage: true,
    maxPage: false,
    options: getShopInitConfig()
  },
  reducers: {
    previuspage: previusPage,
    nextpage: nextPage,
    setminandmaxpage: setMinAndMaxPage
  }
})

export const { nextpage, previuspage, setminandmaxpage}  = shop.actions 
export default shop.reducer;

