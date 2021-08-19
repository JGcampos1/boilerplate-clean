import { createAction } from '@reduxjs/toolkit'

import { ActionMap, ReducerMap } from '~/store/types'

import { AuthSliceState, AUTH_SLICE_ACTIONS } from '../types'

export const logout: ActionMap<void> = createAction(AUTH_SLICE_ACTIONS.LOGOUT)

export const logoutReducer: ReducerMap<AuthSliceState> = (state) => {
  state.logout = true
}
