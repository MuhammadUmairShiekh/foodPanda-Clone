import { configureStore } from '@reduxjs/toolkit'
import  cardSlice  from './card'
export const store = configureStore({
  reducer: cardSlice,
})