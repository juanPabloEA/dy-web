import { combineReducers } from 'redux'
import { configureStore, combineSlicer } from '@reduxjs/toolkit'

import shop from './shop/ShopReducer.jsx'
import counter from './shop/ShopStore.jsx'

const reducer = combineSlicer({
    shop,
    counter
})

const store = configureStore({
    reducer
})

export default store;
