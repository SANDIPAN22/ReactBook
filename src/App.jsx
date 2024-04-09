import React from 'react'
import Feed from './components/Feed'
import Sidebar from './components/Sidebar'
import Rightbar from './components/Rightbar'
import {Stack, Box} from "@mui/material"
import Navbar from './components/Navbar'
const App = () => {
  return (
    <Box>
      <Navbar/>
    <Stack direction={"row"} spacing={2} justifyContent={'space-between'}>
      <Sidebar/>
      <Feed/>
      <Rightbar/>
    </Stack>
    </Box>
  )
}

export default App