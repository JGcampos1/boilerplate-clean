import { inject, injectable } from 'inversify'

import { ApiTypes, InfraTypes } from '~/ioc/types'

import { CarModel } from '~/app/domain/models'
import { CreateCar } from '~/app/domain/usecases/cars'

import type { HttpClient } from '~/app/application/protocols/http'

@injectable()
export class RemoteCreateCar implements CreateCar {
  constructor(
    @inject(ApiTypes.CAR.CREATE_CAR) private readonly url: string,
    @inject(InfraTypes.HTTP_CLIENT)
    private readonly httpClient: HttpClient<RemoteCreateCar.Model>
  ) {}

  async create(params: CreateCar.Params): Promise<void> {
    const httpResponse = await this.httpClient.request({
      method: 'post',
      url: this.url,
      body: params
    })
    // eslint-disable-next-line no-console
    console.log(params, httpResponse)
  }
}

export namespace RemoteCreateCar {
  export type Model = CarModel
}
