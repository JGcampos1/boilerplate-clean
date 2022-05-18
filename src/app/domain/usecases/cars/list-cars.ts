import { LoadFunction } from '~/app/domain/common/types'
import { CarModel } from '~/app/domain/models'

export interface ListCars extends LoadFunction<ListCars.Model, void> {}

export namespace ListCars {
  export type Model = CarModel[]
}
