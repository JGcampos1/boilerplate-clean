import { ContainerModule } from 'inversify'

import { InfraTypes } from '~/ioc/types'

import { CacheStorage } from '~/app/application/protocols/cache'
import { TokenDecoder } from '~/app/application/protocols/decoder'
import { HttpClient } from '~/app/application/protocols/http'

import { LocalStorageCacheStorage } from '~/app/infra/cache'
import { JWTTokenDecoder } from '~/app/infra/decoder'
import { AxiosHttpClient } from '~/app/infra/http'

const InfraClientModule = new ContainerModule((bind) => {
  bind<HttpClient>(InfraTypes.HTTP_CLIENT)
    .to(AxiosHttpClient)
    .inSingletonScope()
  bind<TokenDecoder>(InfraTypes.TOKEN_DECODER)
    .to(JWTTokenDecoder)
    .inSingletonScope()
  bind<CacheStorage>(InfraTypes.CACHE_STORAGE)
    .to(LocalStorageCacheStorage)
    .inSingletonScope()
})

export const InfraModule = [InfraClientModule]
