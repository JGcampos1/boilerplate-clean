import { Reducer } from 'react'
import { RouterState } from 'connected-react-router'
import { AnyAction, Dispatch, Middleware } from 'redux'
import { AuthSliceState } from '../features/auth/types'
import { createStore } from '../store'

export type AppDispatch = ReturnType<typeof createStore>['dispatch']
export type AppState = ReturnType<ReturnType<typeof createStore>['getState']>

export type StoreProps = {
  reducers: {
    router: Reducer<RouterState<unknown>, AnyAction>
    auth: Reducer<AuthSliceState, AnyAction>
  }
  middlewares: [Middleware<{}, any, Dispatch<AnyAction>>]
}
