import React from 'react'
import {Stack, Box, Typography} from "@mui/material"
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import PhotoList from './PhotoList'

const Rightbar = () => {
  return (
    <Box sx={{ display: {xs: 'none', sm: 'flex'}}} flex={2} padding={2}>
        <Box sx={{position: 'fixed'}}>
            <Typography variant="h5" color="gray" sx={{margin: '15px'}} >My Posts</Typography>
            <Box sx={{margin: '10px'}}>
              <PhotoList/>
            </Box>
            <br />
            <Typography variant="h5" color="gray" sx={{margin: '15px'}}>My Online Friends</Typography>
            
              <AvatarGroup max={5}  sx={{flexDirection: 'row', marginLeft: '20px'}}>
              <Avatar alt="Remy Sharp" src="https://api.multiavatar.com/Binx Bond.png" />
              <Avatar alt="Resdsmy Sharp" src="https://api.multiavatar.com/Bindsssx Bond.png" />
              <Avatar alt="Travis Howard" src="https://api.multiavatar.com/Bnx Bond.png" />
              <Avatar alt="Agnes Walker" src="https://api.multiavatar.com/Binxnd.png" />
              <Avatar alt="Trevor Henderson" src="https://api.multiavatar.com/Binx Bd.png" />
              <Avatar alt="Agnes Walker" src="https://api.multiavatar.com/Binxhhhh.png" />
            </AvatarGroup>
           
        </Box>
    </Box>
  )
}

export default Rightbar