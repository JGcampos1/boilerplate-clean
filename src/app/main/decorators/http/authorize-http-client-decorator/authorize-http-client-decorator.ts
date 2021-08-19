import { injectable } from 'inversify'

import { TokenModel } from '~/app/domain/models'

import { CacheStorage } from '~/app/application/protocols/cache'
import {
  HttpClient,
  HttpRequest,
  HttpResponse
} from '~/app/application/protocols/http'

@injectable()
export class AuthorizeHttpClientDecorator implements HttpClient {
  constructor(
    private readonly tokenPath: string,
    private readonly cacheStorage: CacheStorage,
    private readonly httpGetClient: HttpClient
  ) {}

  async request(data: HttpRequest): Promise<HttpResponse> {
    const token = this.cacheStorage.get<TokenModel>(this.tokenPath)
    if (token.accessToken) {
      Object.assign(data, {
        headers: Object.assign(data.headers || {}, {
          Authorization: `Bearer ${token.accessToken}`
        })
      })
    }
    const httpResponse = await this.httpGetClient.request(data)
    return httpResponse
  }
}
