import { Box, Typography, IconButton } from '@mui/material'

import { useToggleTheme, useTranslation } from '~/app/presentation/hooks'

import { LoginForm } from './components'
import { ContentContainer, RootContainer, FormContainer } from './login-styles'

const LoginPage = () => {
  const { translate } = useTranslation()

  const { toggleTheme, type } = useToggleTheme()

  return (
    <RootContainer>
      <ContentContainer>
        <FormContainer>
          <Typography
            variant='h4'
            align='center'
            sx={{
              pb: 2
            }}
          >
            {translate('common:HELLO')}
          </Typography>

          <LoginForm />

          <Box
            mt={2}
            sx={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <IconButton onClick={toggleTheme}>{type}</IconButton>
          </Box>
        </FormContainer>
      </ContentContainer>
    </RootContainer>
  )
}

export default LoginPage
