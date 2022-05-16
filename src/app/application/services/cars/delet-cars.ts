import { inject, injectable } from 'inversify'

import { ApiTypes, InfraTypes } from '~/ioc/types'

import { Response } from '~/app/domain/common/types'
import { error, success } from '~/app/domain/common/utils'
import { DeleteCar } from '~/app/domain/usecases/cars'

import type { HttpClient } from '~/app/application/protocols/http'
import { RequestResponse } from '~/app/application/protocols/http/request-response'

@injectable()
export class RemoteDeleteCar implements DeleteCar {
  constructor(
    @inject(ApiTypes.CAR.DELET_CAR) private readonly url: string,
    @inject(InfraTypes.HTTP_CLIENT)
    private readonly httpClient: HttpClient<void>
  ) {}

  async delete(id: string): Promise<Response<void>> {
    const httpResponse = await this.httpClient.request({
      method: 'delete',
      url: `${this.url}/${id}`
    })

    const ResposeOrError = RequestResponse.handle<void>(httpResponse)
    if (ResposeOrError.isError()) {
      return error(ResposeOrError.value)
    }
    return success(ResposeOrError.value.response as void)
  }
}
