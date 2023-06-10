import { AppBar, Box, Container, Stack, ThemeProvider, createTheme } from '@mui/material'
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Feeds from './components/Feeds'
import Rightbar from './components/Rightbar'
import Add from './components/Add'

function App() {

  const [Mode, setMode] = useState("light")

  const DarkTheme = createTheme({
    palette:{
      mode:Mode
    }
  })

  return (
    <ThemeProvider theme={DarkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar/>
      <Stack spacing={2} direction="row" justifyContent="space-between">
      <Sidebar setMode={setMode} Mode={Mode} />
      <Feeds/>
      <Rightbar/>
      </Stack>
      <Add/>
    </Box>
    </ThemeProvider>
  )
}

export default App