import React from 'react'
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import { Stack, Box, styled} from "@mui/material"
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import CollectionsIcon from '@mui/icons-material/Collections';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import TagIcon from '@mui/icons-material/Tag';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ScheduleIcon from '@mui/icons-material/Schedule';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {xs: '350px', sm: '400px'},
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
  };
  const MyStyledUserBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  })

const AddPost = ({addPost, setAddPost}) => {
  return (
    <div>
    <Modal
        open={addPost}
        onClose={e=>setAddPost(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" color={'gray'}>
            Create Post
          </Typography>

          <br />
          <MyStyledUserBox>
          <Avatar alt="Sandipan Chakraborty"  />
          <Typography variant="body1" color="text.primary">Sandipan Chakraborty</Typography>
          </MyStyledUserBox>
         
          <TextField
          sx={{marginLeft: '50px', width: '80%'}}
          placeholder="Write your post ... "
          label="What's on your mind?"
          multiline
          variant="standard"
        />

        <Stack direction={'row'} gap={1} sx={{marginLeft: '50px', marginTop: '20px', marginBottom: '5px'}}>
            <EmojiEmotionsIcon color='error'/>
            <CollectionsIcon color='primary'/>
            <VideoCameraBackIcon color='secondary'/>
            <TagIcon color="warning"/>
            <ButtonGroup variant="contained" aria-label="Basic button group" sx={{marginLeft: '50px'}}>
        <Button>Post</Button>
        <Button><ScheduleIcon/></Button>
        
        </ButtonGroup>
        </Stack>

        

        </Box>
      </Modal>
    </div>
  )
}

export default AddPost