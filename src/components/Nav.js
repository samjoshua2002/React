import { Bolt } from '@mui/icons-material'
import { AppBar, styled, Toolbar, Typography } from '@mui/material'
import React from 'react'


function Nav() {
    const StyledToolbar = styled(Toolbar)({
        display:'flex',
        justifyContent:'space-between'
    })
  return (
    <AppBar position='sticky'>
        <StyledToolbar >
            <Typography variant='h6' fontStyle={Bolt} >NETFLIX</Typography>
        </StyledToolbar>
        
    </AppBar>
  )
}

export default Nav