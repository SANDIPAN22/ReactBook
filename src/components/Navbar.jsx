import React from 'react'
import {AppBar, Toolbar, Typography, styled, Box} from "@mui/material"
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
const MyStyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",

})

const Navbar = () => {
  return (
    <AppBar position='sticky'>
        <MyStyledToolbar>
            <Typography variant="h5" sx={{display: {xs: 'none', sm: 'block'}}}>ReactBook</Typography>
            <Box sx={{display: {xs: 'block', sm: 'none'}}}><ConnectWithoutContactIcon fontSize='large'/></Box>
        </MyStyledToolbar>
    </AppBar>
  )
}

export default Navbar