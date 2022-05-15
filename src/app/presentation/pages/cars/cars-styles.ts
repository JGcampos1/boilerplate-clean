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
  gap: 15,
  overflow: 'auto',
  '::-webkit-scrollbar-thumb ': {
    background: '#888',
    borderBox: 30
  },
  '::-webkit-scrollbar-thumb:hover': {
    background: ' #555'
  }
}))
export const CarsContainer = styled('div')(() => ({
  width: '100%',
  height: 100,
  display: 'flex',
  background: '#f0f0f5',
  alignItems: 'center',
  justifyContent: 'space-between',

  strong: {
    color: '#383940'
  },
  'p,strong': {
    padding: 10,
    maxWidth: 100,
    minHeight: 30
  },
  img: {
    width: 100,
    height: '100%',
    objectFit: 'cover'
  },
  button: {
    height: '70%',
    border: 'none',
    borderRadius: 8,
    background: '#1976d2',
    color: 'white',
    fontWeight: 'bold'
  }
}))
