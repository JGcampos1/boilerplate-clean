import { ContainerModule } from 'inversify'

import { ServicesTypes } from '~/ioc/types'

import { EmailSignIn } from '~/app/domain/usecases/authentication'

import { RemoteEmailSignIn } from '~/app/application/services'

export const AuthModule = new ContainerModule((bind) => {
  bind<EmailSignIn>(ServicesTypes.AUTH.EMAIL_SIGN_IN).to(RemoteEmailSignIn)
})
