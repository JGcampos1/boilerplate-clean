import { AddFunction } from '~/app/domain/common/types'

export interface CreateCar extends AddFunction<void, CreateCar.Params> {}
export namespace CreateCar {
  export type Params = {
    name: string
    placa: string
    photoUrl: string
  }
}
