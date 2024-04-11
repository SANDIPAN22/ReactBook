import React, { useState } from 'react'
import Feed from './components/Feed'
import Sidebar from './components/Sidebar'
import Rightbar from './components/Rightbar'
import {Stack, Box} from "@mui/material"
import Navbar from './components/Navbar'
const App = () => {
  const [sideBar, setSideBar] = useState(false)
  return (
    <Box>
      <Navbar setSideBar={setSideBar} />
    <Stack direction={"row"} spacing={2} justifyContent={'space-between'}>
      <Sidebar sideBar={sideBar} setSideBar={setSideBar}/>
      <Feed/>
      <Rightbar/>
    </Stack>
    </Box>
  )
}

export default App