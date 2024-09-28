import React from 'react'
import Side from '../components/Side'
import Feeds from '../components/Feeds'
import RightBar from '../components/RightBar'
import { Stack } from '@mui/material'
import Nav from '../components/Nav'

function Custom() {
  return (
    <div>
        
        <Stack direction='row' spacing={2} justifyContent='space-between'>

        <Side/>
        <Feeds/>
        <RightBar/>
        </Stack>
    </div>
  )
}

export default Custom