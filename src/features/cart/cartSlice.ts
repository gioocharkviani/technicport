import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getSession } from 'next-auth/react'



const initialState = null

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

  
  },
})

// Action creators are generated for each case reducer function
export const { } = cartSlice.actions

export default cartSlice.reducer
