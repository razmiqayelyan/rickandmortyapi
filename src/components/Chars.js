import { Button, Container, Grid, IconButton, LinearProgress, Pagination, Stack } from "@mui/material";
import axios from "axios";
import { useQuery, useQueryClient } from "react-query";
import Person from "./Person";
import Space404 from 'react-space-404';
import { Box } from "@mui/system";
import { GetCharContext } from "../Context/CharactersContext";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { animateScroll } from 'react-scroll/modules'
import { useEffect, useState } from "react";




const Chars = () => {
    const {searchText} = GetCharContext()
    const [page, setPage] = useState(1)
    const newDataFething = ({queryKey}) =>
     axios.get(`https://rickandmortyapi.com/api/character?page=${queryKey[1]}`)
    .then((res) => res.data)

    const { isLoading, error, data, isFetching } = useQuery(["characters", page], newDataFething, {
      keepPreviousData: true
    })

    

    if (isLoading) return <LinearProgress sx={{marginTop:8}}/>;
    if (error) return <Box><Space404 countdown={10}/></Box>;

  return (
    <Container sx={{marginTop: 9}}>
      <Grid container spacing={2}>
        {data.results.filter((person) => person.name.toLowerCase().includes(searchText)).map((person) => (
        <Grid key={person.id}  item xs={12} sm={4} md={3}>
         <Person person={person} />
      </Grid>) )}
      </Grid>
      {/* <Box sx={{
        padding:2,
        display: "flex",
        alignItems:"center",
        justifyContent:"space-around"
      }}>
        <Button onClick={() => setPage(page-1)} disabled={!data.info.prev} startIcon={<ArrowBackIosNewIcon/>}>Previous</Button>
        <Button onClick={() => setPage(page+1)}  disabled={!data.info.next} endIcon={<NavigateNextIcon/>}>Next</Button>
      </Box> */}
      

            <Box sx={{
        padding:2,
        display: "flex",
        alignItems:"center",
        justifyContent:"space-around"
      }}>
          <Stack spacing={2}>
            <Pagination count={data.info.pages} 
            onChange={(_,value) => {
              setPage(value)
              animateScroll.scrollTo(0)
            }} 
            />
          </Stack>
      </Box>
     

    </Container>
  )
}

export default Chars
