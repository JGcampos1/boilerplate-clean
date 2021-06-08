import { inject, injectable } from 'inversify'
import { ApiTypes, InfraTypes } from '~/ioc/types'
import { Response } from '~/domain/common/types'
import { error, success } from '~/domain/common/utils'
import { TokenModel } from '~/domain/models'
import { EmailSignIn } from '~/domain/usecases'
import { TokenDecoder } from '~/application/protocols/decoder'
import { HttpClient } from '~/application/protocols/http'
import { RequestResponse } from '~/application/protocols/http/request-response'

@injectable()
export class RemoteEmailSignIn implements EmailSignIn {
  constructor(
    @inject(ApiTypes.AUTH.EMAIL_SIGN_IN) private readonly url: string,
    @inject(InfraTypes.HTTP_CLIENT)
    private readonly httpClient: HttpClient<RemoteEmailSignIn.Model>,
    @inject(InfraTypes.TOKEN_DECODER)
    private readonly tokenDecoder: TokenDecoder
  ) {}

  async auth(params: EmailSignIn.Params): Promise<Response<TokenModel>> {
    const httpResponse = await this.httpClient.request({
      method: 'post',
      url: this.url,
      body: params
    })

    const tokenOrError = RequestResponse.handle<TokenModel>(httpResponse)

    if (tokenOrError.isError()) {
      return error(tokenOrError.value)
    }

    const formattedResponse = this.formatResponse(tokenOrError.value.response)

    return success(formattedResponse)
  }

  private formatResponse(params: RemoteEmailSignIn.Model): TokenModel {
    const decodedAccessToken = this.tokenDecoder.decode<{ exp: number }>(
      params.accessToken
    )
    const decodedRefreshToken = this.tokenDecoder.decode<{ exp: number }>(
      params.accessToken
    )
    return {
      accessToken: params.accessToken,
      expiresIn: decodedAccessToken.exp,
      refreshToken: params.refreshToken,
      refreshTokenExpiresIn: decodedRefreshToken.exp,
      user: params.user
    }
  }
}

export namespace RemoteEmailSignIn {
  export type Model = TokenModel
}
