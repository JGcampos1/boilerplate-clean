import React from 'react'
import { Box, IconButton, Paper, Typography } from '@material-ui/core'
import { useToggleTheme, useTranslation } from '~/presentation/hooks'
import { LoginForm } from './components'
import { useStyles } from './login-styles'

const LoginPage = () => {
  const { translate } = useTranslation()
  const classes = useStyles()

  const { toggleTheme, type } = useToggleTheme()

  return (
    <div className={classes.root}>
      <Paper className={classes.content}>
        <Box className={classes.form}>
          <Typography variant='h4' align='center'>
            {translate('common:HELLO')}
          </Typography>

          <LoginForm />

          <Box mt={2} display='flex' justifyContent='center'>
            <IconButton onClick={toggleTheme}>{type}</IconButton>
          </Box>
        </Box>
      </Paper>
    </div>
  )
}

export default LoginPage
