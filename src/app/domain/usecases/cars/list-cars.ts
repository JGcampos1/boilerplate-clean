import { CarModel } from '~/app/domain/models'

export interface ListCars {
  loadAll: () => Promise<CarModel>
}
