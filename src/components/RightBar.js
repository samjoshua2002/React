import React from 'react'
import { Box } from '@mui/material'

function RightBar() {
  return (
    <Box sx={{display:{xs:'none' , sm:'block'}}} bgcolor='rebeccapurple' flex={2} p={2} >Right</Box>
  )
}

export default RightBar