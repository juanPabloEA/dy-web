import { createSlice, configureStore, createReducer, createAction} from '@reduxjs/toolkit'

export const INCREMENTED = "INCREMENTED"
export const DECREMENTED = "DECREMENTED"

const incrementAction = createAction(INCREMENTED);
const decrementedAction =  createAction(DECREMENTED);

const ShopReducer = createReducer({}, (builder) => {
  builder.addCase(incrementAction, (state, action) => {
    
  })

  builder.addCase(decrementedAction, (state, action) => {})
})

export default ShopReducer;

