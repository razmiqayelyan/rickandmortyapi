import { Button, Card, CardActionArea, CardContent, CardMedia, Container, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { GetCharContext } from '../Context/CharactersContext'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box, width } from '@mui/system';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';


const Favorites = () => {
    const {favorites, dispatch, searchText} = GetCharContext()
    
        
    return (
    <>
    
    <Link style={{color:"inherit",textDecoration: "none", marginTop:'50px'}} to='/'>
      <Box sx={{
        display:{xs:"block", sm:"none", md:"none", lg:"none"},
        width:10,
        height:30,
        marginTop: 7,
        color:"text.primary"
      }}>
           <Button
            onClick={() =>searchText('')}
           startIcon={<ArrowLeftIcon/>}>Back</Button>

       
      </Box>
    </Link>
    <Container sx={{marginTop: {xs:7, sm:8, md:8, lg: 8}}}>
    <Grid container spacing={2}>
      {favorites.filter((person) => person.name.toLowerCase().includes(searchText)).map((person) => <Grid key={person.id} item xs={12} sm={4} md={3}> <Card sx={{ maxWidth: 400 , height: 222}}>
      <CardActionArea>
      <Link style={{color:"inherit",textDecoration: "none"}} to={`/characters/${person.id}`}>
        <CardMedia
          component="img"
          height="140"
          image={person.image}
          alt="Razos Website"
        /></Link>
        <CardContent sx={{display:"flex", justifyContent:"space-between"}}>
          <Typography gutterBottom variant="h5" component="div">
            {person.name}
          </Typography>
          <IconButton  onClick={() => {
              // setFavorites(favorites.filter(e => e.name !== person.name))
              dispatch({
                type:'remove',
                payload:person
              })
            }}   component='div' sx={{maxHeight:40}}
         >
            <FavoriteIcon  />
         </IconButton>
        </CardContent>
        
      </CardActionArea>
    </Card>
    </Grid>
)}
</Grid>
        
    </Container>
    </>
  );
}

export default Favorites
