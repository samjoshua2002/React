import React,{useState} from 'react'
import Side from '../components/Side'
import Feeds from '../components/Feeds'
import RightBar from '../components/RightBar'
import { Box, createTheme, Stack, ThemeProvider } from '@mui/material'
import Nav from '../components/Nav'
import Add from '../components/Add'

function Custom() {
  const [mode, setMode] = useState("dark");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <div>
      <ThemeProvider theme={darkTheme}>

      <Box bgcolor={"background.default"} color={"text.primary"}>

        <Nav/>
        <Stack direction='row' spacing={2} justifyContent='space-between'>

        <Side setMode={setMode} mode={mode}/>
        <Feeds/>
        <RightBar/>
        </Stack>
        <Add/>
      </Box>
      </ThemeProvider>
    </div>
  )
}

export default Custom