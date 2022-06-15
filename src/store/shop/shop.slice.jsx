import { createSlice } from '@reduxjs/toolkit'
import { previusPage, nextPage, setMinAndMaxPage, configureDisableOption, setCheckOption} from './shop.actions.jsx'
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
        name: "",
        phone: "",
        delivery: true, 
        address: "",
        observation: "",
      }
    }
  },
  reducers: {
    previuspage: previusPage,
    nextpage: nextPage,
    setminandmaxpage: setMinAndMaxPage,
    configuredisableoption: configureDisableOption,
    setcheckoption: setCheckOption

  }
  })

export const { configuredisableoption, nextpage, previuspage, setminandmaxpage, setcheckoption }  = shop.actions 
export default shop.reducer;

