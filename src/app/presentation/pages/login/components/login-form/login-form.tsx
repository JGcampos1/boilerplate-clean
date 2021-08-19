import { Box, Button } from '@material-ui/core'

import { ValidationTypes } from '~/ioc/types/validation'

import { Validation } from '~/app/presentation/common/protocols'
import { TextInput } from '~/app/presentation/components'
import {
  useEmailSignInMutation,
  useTranslation
} from '~/app/presentation/hooks'
import { useService } from '~/app/presentation/hooks/use-service'
import { FormProvider } from '~/app/presentation/providers'

const LoginForm = () => {
  const validationSchema = useService<Validation>(
    ValidationTypes.AUTH.SIGN_IN_FORM
  )

  const [emailSignIn] = useEmailSignInMutation()

  const { translate } = useTranslation()

  const onSubmit = async (values: { email: string; password: string }) => {
    emailSignIn(values)
  }

  return (
    <FormProvider validationSchema={validationSchema} mode='onBlur'>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <TextInput
              name='email'
              label={'common:EMAIL'}
              autoComplete='email'
            />
            <TextInput
              name='password'
              label={'common:PASSWORD'}
              type='password'
              autoComplete='current-password'
            />
          </div>
          <Box mt={1}>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              data-testid='submit-button'
            >
              {translate('actions.enter')}
            </Button>
          </Box>
        </form>
      )}
    </FormProvider>
  )
}

export default LoginForm
