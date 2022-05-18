import { inject, injectable } from 'inversify'

import { ApiTypes, InfraTypes } from '~/ioc/types'

import { Response } from '~/app/domain/common/types'
import { error, success } from '~/app/domain/common/utils'
import { UpdateCar } from '~/app/domain/usecases/cars'

import type { HttpClient } from '~/app/application/protocols/http'
import { RequestResponse } from '~/app/application/protocols/http/request-response'

@injectable()
export class RemoteUpdateCar implements UpdateCar {
  constructor(
    @inject(ApiTypes.CAR.UPDATE_CAR) private readonly url: string,
    @inject(InfraTypes.HTTP_CLIENT)
    private readonly httpClient: HttpClient<void>
  ) {}

  async update(params: UpdateCar.Params): Promise<Response<void>> {
    const httpResponse = await this.httpClient.request({
      method: 'put',
      url: `${this.url}/${params.id}`,
      body: params
    })
    const ResposeOrError = RequestResponse.handle<void>(httpResponse)
    if (ResposeOrError.isError()) return error(ResposeOrError.value)

    return success(ResposeOrError.value.response as void)
  }
}
