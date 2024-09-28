import { Box } from '@mui/material'
import React from 'react'

function Side() {
  return (
    <Box bgcolor='skyblue' sx={{display:{xs:'none' , sm:'block'}}} p={2} flex={1}>Side</Box>
  )
}

export default Side