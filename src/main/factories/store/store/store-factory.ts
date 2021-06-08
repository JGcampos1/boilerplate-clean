import { connectRouter } from 'connected-react-router'
import { authSlice } from '~/store/features/auth'
import { createStore } from '~/store/store'
import { browserHistory } from '~/main/router/browser-history'
import { makeRouterMiddleware } from '../middlewares'

export const makeStore = () =>
  createStore({
    reducers: {
      auth: authSlice.reducer,
      router: connectRouter(browserHistory)
    },
    middlewares: [makeRouterMiddleware()]
  })
