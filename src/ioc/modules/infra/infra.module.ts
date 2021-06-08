import { ContainerModule } from 'inversify'
import { InfraTypes } from '~/ioc/types'
import { CacheStorage } from '~/application/protocols/cache'
import { TokenDecoder } from '~/application/protocols/decoder'
import { HttpClient } from '~/application/protocols/http'
import { LocalStorageCacheStorage } from '~/infra/cache'
import { JWTTokenDecoder } from '~/infra/decoder'
import { AxiosHttpClient } from '~/infra/http'

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
