
import { Box} from "@mui/material"
import Drawer from '@mui/material/Drawer';
import SidebarInnerLists from "./SidebarInnerLists";
import React from "react";


const Sidebar = ({sideBar, setSideBar, addPost, setAddPost, setMode}) => {
 
  

  return (
    <>
        <Box sx={{ display: {xs: 'none', sm: 'block'}}} flex={1} padding={2}>
          <Box sx={{position: "fixed"}}>
          <SidebarInnerLists addPost={addPost} setAddPost={setAddPost} setMode={setMode}/>
          </Box>
          
        </Box>

        <Drawer
        anchor={'left'}
        open={sideBar}
        onClose={e=>{setSideBar(false)}}
        >
            <SidebarInnerLists addPost={addPost} setAddPost={setAddPost} setMode={setMode}/>
        </Drawer>
    </>
  )
}

export default Sidebar