import { inject, injectable } from 'inversify'

import { ApiTypes, InfraTypes } from '~/ioc/types'

import { Response } from '~/app/domain/common/types'
import { error, success } from '~/app/domain/common/utils'
import { ListCars } from '~/app/domain/usecases/cars/list-cars'

import type { HttpClient } from '~/app/application/protocols/http'
import { RequestResponse } from '~/app/application/protocols/http/request-response'

@injectable()
export class RemoteListCars implements ListCars {
  constructor(
    @inject(ApiTypes.CAR.LIST_CAR) private readonly url: string,
    @inject(InfraTypes.HTTP_CLIENT)
    private readonly httpClient: HttpClient<ListCars.Model>
  ) {}

  async load(): Promise<Response<ListCars.Model>> {
    const httpResponse = await this.httpClient.request({
      method: 'get',
      url: this.url
    })
    // set list reducer

    const ResposeOrError = RequestResponse.handle<ListCars.Model>(httpResponse)
    if (ResposeOrError.isError()) {
      return error(ResposeOrError.value)
    }
    return success(ResposeOrError.value.response as ListCars.Model)
  }
}
