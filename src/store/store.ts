import { configureStore } from '@reduxjs/toolkit'
import { StoreProps } from './types'

export const createStore = ({ reducers, middlewares }: StoreProps) =>
  configureStore({
    reducer: { ...reducers },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(...middlewares)
  })
