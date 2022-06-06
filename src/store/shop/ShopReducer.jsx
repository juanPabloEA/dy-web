import { createSlice } from '@reduxjs/toolkit'

export const name = "shop"

const shop = createSlice({
  name: name,
  initialState: {
    value: 0
  },
  reducer: {
    incremented: state => {
      state.value += 1;
    },
    decremented: state => {
      state.value -= 1
    }
  }
})

export default shop;

