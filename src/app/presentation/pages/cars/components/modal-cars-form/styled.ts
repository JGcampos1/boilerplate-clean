import { styled } from '@mui/material'

export const Container = styled('div')`
  background-color: #0e0414ef;
  width: 100%;
  height: 100vh;

  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const FormContainer = styled('form')(() => ({
  display: 'flex',
  padding: 100,
  borderRadius: 10,
  background: 'white',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '80%',
  height: '50%'
}))
