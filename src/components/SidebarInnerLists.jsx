import React from 'react'
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Switch from '@mui/material/Switch';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PostAddIcon from '@mui/icons-material/PostAdd';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { useState } from 'react'

const SidebarInnerLists = ({addPost, setAddPost, setMode}) => {
    const [checked, setChecked] = useState(true)
    const handleThemeSwitch = ( ) =>{
        setChecked(prev => !prev)
        setMode(prev => {
          if (prev === 'dark'){
            return 'light'
          }
          return 'dark'
        })
      }
  return (
    <div>
         <List
              sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  Pages
                </ListSubheader>
              }
            >
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="About" />  
            </ListItemButton>
            
            <ListItemButton>
              <ListItemIcon>
                <AddRoadIcon />
              </ListItemIcon>
              <ListItemText primary="Sample 01" />  
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
                <AllInboxIcon />
              </ListItemIcon>
              <ListItemText primary="Sample 02" />  
            </ListItemButton>

          </List>

          <List
              sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
              component="nav"
              aria-labelledby="nested-list-subheader-actions"
              subheader={
                <ListSubheader component="div" id="nested-list-subheader-actions">
                  Actions
                </ListSubheader>
              }
            >
            <ListItemButton>
              <ListItemIcon>
                <PersonAddIcon />
              </ListItemIcon>
              <ListItemText primary="Add Friend" />
            </ListItemButton>
            <ListItemButton onClick={e=>setAddPost(true)}>
              <ListItemIcon>
                <PostAddIcon />
              </ListItemIcon>
              <ListItemText primary="Add Post" />  
            </ListItemButton>
            
            <ListItemButton>
              <ListItemIcon>
                <LiveTvIcon />
              </ListItemIcon>
              <ListItemText primary="Go Live" />  
            </ListItemButton>
          </List>

          <List
              sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
              component="nav"
              aria-labelledby="nested-list-subheader-theme"
              subheader={
                <ListSubheader component="div" id="nested-list-subheader-theme">
                  Theme Switch
                </ListSubheader>
              }
            >

            <ListItemButton >
              <ListItemIcon>
              <Switch
              checked={checked}
              onChange={handleThemeSwitch}
              inputProps={{ 'aria-label': 'controlled' }}
              sx={{ transform: "scale(1.5)" }} 
              />
              </ListItemIcon>
            </ListItemButton>

          </List>
    </div>
  )
}

export default SidebarInnerLists