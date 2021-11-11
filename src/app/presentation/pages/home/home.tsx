import { Box, Button, Typography } from '@mui/material'

import { logout } from '~/store/features/auth/actions'
import { getUserAuthState } from '~/store/features/auth/selectors'

import { useAppDispatch, useAppSelector } from '~/app/presentation/hooks'

const HomePage = () => {
  const { user } = useAppSelector(getUserAuthState)
  const dispatch = useAppDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <Typography variant='h1'>Hello {user.firstName}</Typography>
      <Button
        size='large'
        variant='contained'
        color='primary'
        onClick={handleLogout}
      >
        Sair
      </Button>
    </Box>
  )
}

export default HomePage
