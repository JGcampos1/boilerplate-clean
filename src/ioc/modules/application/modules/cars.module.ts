import { ContainerModule } from 'inversify'

import { ServicesTypes } from '~/ioc/types'

import {
  ListCars,
  CreateCar,
  DeleteCar,
  UpdateCar
} from '~/app/domain/usecases/'

import {
  RemoteListCars,
  RemoteCreateCar,
  RemoteDeleteCar,
  RemoteUpdateCar
} from '~/app/application/services'

export const CarsModule = new ContainerModule((bind) => {
  bind<ListCars>(ServicesTypes.CAR.LIST_CAR).to(RemoteListCars)
  bind<CreateCar>(ServicesTypes.CAR.CREATE_CAR).to(RemoteCreateCar)
  bind<DeleteCar>(ServicesTypes.CAR.DELET_CAR).to(RemoteDeleteCar)
  bind<UpdateCar>(ServicesTypes.CAR.UPDATE_CAR).to(RemoteUpdateCar)
})
