import { createSelector } from 'reselect'

import { RootState } from '~/store/types'

const authSliceSelector = (state: RootState) => state.auth

export const getUserAuthState = createSelector(authSliceSelector, (auth) => {
  return {
    isAuthenticated: !!auth.token.accessToken,
    user: auth.token.user,
    logoutRequested: auth.logout
  }
})
