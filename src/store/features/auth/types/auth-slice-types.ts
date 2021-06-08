import { makeQueryManagementData } from '~/store/helpers'
import { QueryManagement } from '~/store/types'
import { TokenModel } from '~/domain/models'

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
  emailSignIn: {
    ...makeQueryManagementData()
  },
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
  emailSignIn: QueryManagement<void>
  logout: boolean
}
