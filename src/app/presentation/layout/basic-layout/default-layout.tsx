import React from 'react'

import { Box } from '@mui/material'

const BasicLayout: React.FC = ({ children }) => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {children}
    </Box>
  )
}

export default BasicLayout
