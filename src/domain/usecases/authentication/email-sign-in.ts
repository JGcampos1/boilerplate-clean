import { Response } from '~/domain/common/types'
import { TokenModel } from '~/domain/models'

export interface EmailSignIn {
  auth: (params: EmailSignIn.Params) => Promise<Response<TokenModel>>
}

export namespace EmailSignIn {
  export type Params = {
    email: string
    password: string
  }
}
