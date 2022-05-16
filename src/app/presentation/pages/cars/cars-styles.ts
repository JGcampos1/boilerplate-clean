import { Paper, styled } from '@mui/material'
export const RootContainer = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'inherit',
  alignItems: 'inherit',
  width: '100%',
  height: '100%'
}))

export const ContentContainer = styled(Paper)(({ theme }) => ({
  width: '70%',
  height: '70%',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '80%'
  },
  [theme.breakpoints.down('xs')]: {
    maxWidth: '90%'
  }
}))
export const ListCarsContainer = styled('div')(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  marginTop: 50,
  alignItems: 'center',
  borderRadius: 10,
  gap: 15
}))
export const CarsContainer = styled('div')(({ theme }) => ({
  width: '100%',
  height: 100,
  display: 'flex',
  background: '#f0f0f5',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: 5,
  padding: 5,

  strong: {
    color: '#383940'
  },

  img: {
    width: 100,
    height: '100%',
    objectFit: 'cover',
    borderRadius: 5
  },

  button: {
    height: '50px',
    border: 'none',
    borderRadius: 8,
    background: '#1976d2',
    color: 'white',
    fontWeight: 'bold',
    margin: '0 10px',
    padding: '0 20px'
  },
  [theme.breakpoints.down('sm')]: {
    height: 'auto',
    flexDirection: 'column',
    padding: 20,
    justifyContent: 'center',
    textAlign: 'center'
  }
}))
