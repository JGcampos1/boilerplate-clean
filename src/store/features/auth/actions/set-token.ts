import { createAction } from '@reduxjs/toolkit'

import { ActionMap, ReducerMap } from '~/store/types/action-reducer-map'

import { TokenModel } from '~/app/domain/models'

import { AuthSliceState, AUTH_SLICE_ACTIONS } from '../types'

export const setToken: ActionMap<TokenModel> = createAction(
  AUTH_SLICE_ACTIONS.SET_TOKEN
)

export const setTokenReducer: ReducerMap<AuthSliceState, TokenModel> = (
  state,
  action
) => {
  state.token = action.payload
}
