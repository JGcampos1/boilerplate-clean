import { ContainerModule } from 'inversify'
import { ServicesTypes } from '~/ioc/types'
import { EmailSignIn } from '~/domain/usecases/authentication'
import { RemoteEmailSignIn } from '~/application/services'

export const AuthModule = new ContainerModule((bind) => {
  bind<EmailSignIn>(ServicesTypes.AUTH.EMAIL_SIGN_IN).to(RemoteEmailSignIn)
})
