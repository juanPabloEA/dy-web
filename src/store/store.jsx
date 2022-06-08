import { combineReducers } from 'redux'
import { configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import shop from './shop/shop.slice.jsx'

const rootReducer = combineReducers({
    shop,
})

const store = configureStore({
    reducer: rootReducer, 
    middleware: [...getDefaultMiddleware()]})

export default store;
