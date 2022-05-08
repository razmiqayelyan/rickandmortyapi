import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { GetCharContext } from '../Context/CharactersContext';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';

export default function Person({person}) {
  const {favorites, dispatch} = GetCharContext()
  const color = (status) => {
    if(status === 'Dead') return 'error';
    else if (status === 'Alive') return "green"
  }

  

  console.log(person)
  return (
    <Card sx={{ maxWidth: 400 , height: 230}}>
      <CardActionArea>
      <Link style={{color:"inherit",textDecoration: "none"}} to={`/characters/${person.id}`}>
        <CardMedia
          component="img"
          height="140"
          image={person.image}
          alt="Razos Website"
        /></Link>
        <CardContent sx={{display:"flex", justifyContent:"space-between"}}>
          <Box>
          <Typography  gutterBottom variant="subtitle2" component="div">
            {person.name}
          </Typography>
          <Typography  color={color(person.status)} variant="subtitle2" component="div">   
                {person.status}
          </Typography>

          </Box>
        <Box>{favorites?.filter((p) => p.name === person.name).length > 0 ?
         
            <IconButton 
            component='div'
             sx={{maxHeight:40}}
             onClick={() => {
              dispatch({
                type:'remove',
                payload:person
              })
           // setFavorites(favorites.filter(e => e.name !== person.name))
         }}
         >
               <FavoriteIcon />
          </IconButton> :
      
             <IconButton component='div'
          onClick={()=> {
            // setFavorites([...favorites, person])
            dispatch({
              type:'add',
              payload:person
            })
          }}
          sx={{maxHeight:40}}>
              <FavoriteBorderIcon />
          </IconButton>

      
        }</Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
