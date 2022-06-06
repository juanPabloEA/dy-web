import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

import shop from './shop/ShopReducer.jsx'
import counter from './shop/ShopStore.jsx'

const reducer = combineReducers({
    shop: shop.reducer,
    counter: counter.reducer
})

const store = configureStore({
    reducer
})

export default store;
