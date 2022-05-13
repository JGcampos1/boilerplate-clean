import { Paper, styled } from '@mui/material'

export const RootContainer = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'inherit',
  alignItems: 'inherit',
  width: '100%',
  height: '100%'
}))

export const ContentContainer = styled(Paper)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '70%',
  height: '70%',
  maxWidth: '50%',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '80%'
  },
  [theme.breakpoints.down('xs')]: {
    maxWidth: '90%'
  }
}))

export const FormContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '80%',
  height: '50%'
}))
