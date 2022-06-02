import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

import ShopReducer from './shop/ShopReducer.jsx'

const State = configureStore({
    reducer: {
      shop: ShopReducer,
      //client: ClientReducer,
    }
})

export default State;
