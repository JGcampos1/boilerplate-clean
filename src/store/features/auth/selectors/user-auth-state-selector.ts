import { createSelector } from 'reselect'
import { AppState } from '~/store/types'

const authSliceSelector = (state: AppState) => state.auth

export const getUserAuthState = createSelector(authSliceSelector, (auth) => {
  return {
    isAuthenticated: !!auth.token.accessToken,
    user: auth.token.user,
    logoutRequested: auth.logout
  }
})
