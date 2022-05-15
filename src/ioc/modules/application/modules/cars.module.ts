import { ContainerModule } from 'inversify'

import { ServicesTypes } from '~/ioc/types'

import { ListCars, CreateCar, DeletCar } from '~/app/domain/usecases/'

import {
  RemoteListCars,
  RemoteCreateCar,
  RemoteDeletCar
} from '~/app/application/services'

export const CarsModule = new ContainerModule((bind) => {
  bind<ListCars>(ServicesTypes.CAR.LIST_CAR).to(RemoteListCars)
  bind<CreateCar>(ServicesTypes.CAR.CREATE_CAR).to(RemoteCreateCar)
  bind<DeletCar>(ServicesTypes.CAR.DELET_CAR).to(RemoteDeletCar)
})
