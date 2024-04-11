import React from 'react'
import {Stack, Box} from "@mui/material"
import Post from './Post'
const Feed = () => {
  const postCount = [1,2,3,4,5,6,7,8]
  return (
    
    <Box  flex={4} padding={2}>
      {postCount.map(elem=> {
        // console.log(key)
      return <Post elem={elem}/>
      })}
  
    </Box>
  )
}

export default Feed