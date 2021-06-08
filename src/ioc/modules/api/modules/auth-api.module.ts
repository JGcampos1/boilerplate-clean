import { ContainerModule } from 'inversify'
import { makeApiUrl } from '~/ioc/helpers'
import { ApiTypes } from '~/ioc/types'

export const AuthApiModule = new ContainerModule((bind) => {
  bind<string>(ApiTypes.AUTH.EMAIL_SIGN_IN).toConstantValue(makeApiUrl('auth'))
})
