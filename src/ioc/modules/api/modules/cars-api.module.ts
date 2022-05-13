import { ContainerModule } from 'inversify'

import { makeApiUrl } from '~/ioc/helpers'
import { ApiTypes } from '~/ioc/types'
export const CarsApiModule = new ContainerModule((bind) => {
  bind<string>(ApiTypes.CAR.LIST_CAR).toDynamicValue(() => makeApiUrl('cars'))
  bind<string>(ApiTypes.CAR.CREATE_CAR).toDynamicValue(() => makeApiUrl('cars'))
})
