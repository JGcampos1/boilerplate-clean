import { TokenModel } from '~/app/domain/models'

export const authSliceName = 'auth' as const

export const SET_TOKEN = 'setToken'
export const EMAIL_SIGN_IN = 'emailSignIn'
export const LOGOUT = 'logout'

export const AUTH_SLICE_ACTIONS = {
  SET_TOKEN: `${authSliceName}/${SET_TOKEN}`,
  EMAIL_SIGN_IN: `${authSliceName}/${EMAIL_SIGN_IN}`,
  LOGOUT: `${authSliceName}/${LOGOUT}`
} as const

export const AUTH_SLICE_INITIAL_STATE: AuthSliceState = {
  token: {
    accessToken: '',
    expiresIn: null,
    refreshToken: '',
    refreshTokenExpiresIn: null,
    user: null
  },
  logout: false
}

export type AuthSliceState = {
  token: TokenModel
  logout: boolean
}
