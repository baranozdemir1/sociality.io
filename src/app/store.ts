import { configureStore } from '@reduxjs/toolkit'
import apiData from './apiDataReducer'

const store = configureStore({
  reducer: {
    apiData
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store
