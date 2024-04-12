import React, { useState } from 'react'
import Feed from './components/Feed'
import Sidebar from './components/Sidebar'
import Rightbar from './components/Rightbar'
import {Stack, Box} from "@mui/material"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from './components/Navbar'
import AddPost from './components/AddPost'

const App = () => {
  const [sideBar, setSideBar] = useState(false)
  const [addPost, setAddPost] = useState(false)
  const [mode, setMode] = useState('dark')
  const MyTheme = createTheme ({
    palette:{
      mode: mode
    }
  })
  return (
    < ThemeProvider theme={MyTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
    <Navbar setSideBar={setSideBar} />
      <Stack direction={"row"} spacing={2} justifyContent={'space-between'}>
        <Sidebar sideBar={sideBar} setSideBar={setSideBar} addPost={addPost} setAddPost={setAddPost} setMode={setMode}/>
        <Feed/>
        <Rightbar/>
      </Stack>
    <AddPost addPost={addPost} setAddPost={setAddPost}/>
    </Box>
    </ThemeProvider>
  )
}

export default App