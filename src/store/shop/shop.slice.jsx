import { createSlice } from '@reduxjs/toolkit'
import { previusPage, nextPage} from './shop.actions.jsx'
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
    nextpage: nextPage}
})

export const { nextpage, previuspage}  = shop.actions 
export default shop.reducer;

