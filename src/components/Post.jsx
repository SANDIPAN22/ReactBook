import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';


const Post = ({elem}) => {
  return (

    <Card sx={{margin: '5px'}}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          R
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title="Jhon Doe"
      subheader="April 14, 2024"
    />
    
        <CardMedia
        component="img"
        image={`https://source.unsplash.com/collection/${elem}/800x800`}
        height={'300px'}
        alt="Paella dish"
        />
    

    <CardContent>
      <Typography variant="body2" color="text.secondary">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton>
      <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite />}  aria-label="like" color='error'/>
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
      
    </CardActions>
    
  </Card>
  )
}

export default Post