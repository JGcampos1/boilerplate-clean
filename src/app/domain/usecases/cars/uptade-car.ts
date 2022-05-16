import { UpdateFunction } from '~/app/domain/common/types'
import { CarModel } from '~/app/domain/models'

export interface UpdateCar extends UpdateFunction<void, UpdateCar.Params> {}

export namespace UpdateCar {
  export type Params = CarModel
}
