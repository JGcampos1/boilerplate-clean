import { configureStore } from '@reduxjs/toolkit'
import { routerMiddleware } from 'connected-react-router'

import { browserHistory } from '~/app/main/factories/routes/browser-history'

import { apiSlice } from './features/api/slice/api-slice'
import { authSlice } from './features/auth'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [authSlice.name]: authSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      apiSlice.middleware,
      routerMiddleware(browserHistory)
    ])
})
