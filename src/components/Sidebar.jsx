
import { Box} from "@mui/material"
import Drawer from '@mui/material/Drawer';
import SidebarInnerLists from "./SidebarInnerLists";
import React from "react";


const Sidebar = ({sideBar, setSideBar}) => {
 
  

  return (
    <>
        <Box sx={{ display: {xs: 'none', sm: 'block'}}} flex={1} padding={2}>
          <Box sx={{position: "fixed"}}>
          <SidebarInnerLists />
          </Box>
          
        </Box>

        <Drawer
        anchor={'left'}
        open={sideBar}
        onClose={e=>{setSideBar(false)}}
        >
            <SidebarInnerLists />
        </Drawer>
    </>
  )
}

export default Sidebar