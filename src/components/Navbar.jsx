import React, { useState } from 'react'
import {AppBar, Toolbar, Typography, styled, Box, Menu, MenuItem} from "@mui/material"
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}


const MyStyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",

})
const MyNavIconsTraySM = styled(Box)(({theme})=>({
  display: 'flex',
  gap: '15px',
  width: '15%',
  alignItems: 'center',
}))
const MyNavIconsTray = styled(Box)(({theme})=>({
  display: 'flex',
  justifyContent: 'space-evenly',
  gap: '15px',
  width: '15%',
  alignItems: 'center',
}))
const MyNavSerach = styled("div")(({theme})=>({
  backgroundColor: "white",
  padding: "1px 10px",
  color: 'gray',
  borderRadius: theme.shape.borderRadius,
  [theme.breakpoints.up('xs')]:{
    width: '45%',
  },
  [theme.breakpoints.up('sm')]:{
    width: '30%',
  }
}))

const Navbar = ({setSideBar}) => {
  const [open, setOpen] = useState(false)
  return (
    <AppBar position='sticky'>
        <MyStyledToolbar>
            <Typography variant="h5" sx={{display: {xs: 'none', sm: 'block'}}}>ReactBook</Typography>
            <Box sx={{display: {xs: 'block', sm: 'none'}}} onClick={e=>setSideBar(true)}><ConnectWithoutContactIcon fontSize='large'  /></Box>
            <MyNavSerach><InputBase placeholder='Search...'></InputBase></MyNavSerach>
            <MyNavIconsTray sx={{display: {xs: 'none', sm: 'flex'}}}>
              <Badge color="error" badgeContent={22}>
                <MailIcon />
              </Badge>
              <Badge color="error" badgeContent={7}>
                <NotificationsActiveIcon  />
              </Badge>
              <Avatar {...stringAvatar('Sandipan C')} onClick={e => setOpen(true)} />
            </MyNavIconsTray>
            <MyNavIconsTraySM sx={{display: {xs: 'flex', sm: 'none'}}}>
              <Avatar {...stringAvatar('Sandipan C')} onClick={e => setOpen(true)} />
              
            </MyNavIconsTraySM>
            <Menu sx={{display: {xs: 'none', sm: 'block'}}}
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              // anchorEl={anchorEl}
              open={open}
              onClose={e=>setOpen(false)}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <MenuItem>Logout</MenuItem>
              <MenuItem>My account</MenuItem>
            </Menu>
            <Menu sx={{display: {xs: 'flex', sm: 'none'}}}
              id="demo-positioned-menu-sm"
              aria-labelledby="demo-positioned-button-sm"
              // anchorEl={anchorEl}
              open={open}
              onClose={e=>setOpen(false)}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <MenuItem>Logout</MenuItem>
              <MenuItem>My account</MenuItem>
              <MenuItem>Messages</MenuItem>
              <MenuItem>Notification</MenuItem>
            </Menu>
        </MyStyledToolbar>
    </AppBar>
  )
}

export default Navbar