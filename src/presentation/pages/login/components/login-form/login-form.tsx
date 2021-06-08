import { Box, Button } from '@material-ui/core'
import { ValidationTypes } from '~/ioc/types/validation'
import { emailSignIn } from '~/store/features/auth/actions'
import { Validation } from '~/presentation/common/protocols'
import { TextInput } from '~/presentation/components'
import { useAppDispatch, useForm, useTranslation } from '~/presentation/hooks'
import { useService } from '~/presentation/hooks/use-service'

const LoginForm = () => {
  const validationSchema = useService<Validation>(
    ValidationTypes.AUTH.SIGN_IN_FORM
  )
  const dispatch = useAppDispatch()
  const { control, handleSubmit } = useForm({
    mode: 'onBlur',
    validationSchema
  })

  const { translate } = useTranslation()

  const onSubmit = async (values: { email: string; password: string }) => {
    dispatch(emailSignIn(values))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <TextInput
          control={control}
          name='email'
          label={'common:EMAIL'}
          autoComplete='email'
        />
        <TextInput
          control={control}
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
  )
}

export default LoginForm
