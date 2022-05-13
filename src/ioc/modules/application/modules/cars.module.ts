import { ContainerModule } from 'inversify'

import { ServicesTypes } from '~/ioc/types'

import { ListCars, CreateCar } from '~/app/domain/usecases/'

import { RemoteListCars, RemoteCreateCar } from '~/app/application/services'

export const CarsModule = new ContainerModule((bind) => {
  bind<ListCars>(ServicesTypes.CAR.LIST_CAR).to(RemoteListCars)
  bind<CreateCar>(ServicesTypes.CAR.CREATE_CAR).to(RemoteCreateCar)
})
