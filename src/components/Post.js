import React from 'react'
import { Avatar, Card, CardContent, CardHeader, IconButton, Typography, CardActions, CardMedia, Checkbox } from '@mui/material';
import { red } from '@mui/material/colors'; // Importing colors for Avatar background
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SendIcon from '@mui/icons-material/Send';


import { Favorite, FavoriteBorder } from '@mui/icons-material';

function Post() {
  return (
    <Card sx={{}}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }}  alt="Gojo Satoru 2" src="https://i.pinimg.com/236x/6f/fb/22/6ffb221815e8d7c7421bfd8bd0aebb8a.jpg" aria-label="recipe">
             
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="bts21_ot7_💜"
          subheader="September 21, 2024"
        />
        <CardMedia
          component="img"
          height="194"
          image="https://i.pinimg.com/736x/e7/db/75/e7db753b8dabb6fc3147f9aec6564d84.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite  sx={{color:"red"}}/>} />
          </IconButton>
          <IconButton aria-label="share">
            <SendIcon/>
          </IconButton>
        </CardActions>
      </Card>
  )
}

export default Post