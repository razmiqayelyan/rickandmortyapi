import { Button, Container, IconButton, LinearProgress, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { Link, useParams } from "react-router-dom"
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { useQuery } from "react-query";
import axios from "axios";
import Space404 from "react-space-404";
import './CharInfo.css'

const CharInfo = () => {
  const { id } = useParams()
  

  const { isLoading, error, data, isFetching } = useQuery("character",  () =>
  axios.get(`https://rickandmortyapi.com/api/character/${id}`)
 .then((res) => res.data)
, {
    keepPreviousData: true
  })
   



  if (isLoading) return <LinearProgress  sx={{marginTop:8}}/>;
  if (error) return <Box><Space404 countdown={10}/></Box>;
  return (
    <Box className="bg" sx={{marginTop:{xs:6,sm:8}, width:"100%"}} >
    
       <Link style={{color:"inherit",textDecoration: "none", marginTop:'50px'}} to='/'>
      <Box sx={{
        display:{xs:"block", sm:"none", md:"none", lg:"none"},
        width:10,
        height:30,
        marginTop: 7,
        color:"text.primary"
      }}>
     <Button  startIcon={<ArrowLeftIcon/>}>Back</Button>
       
      </Box>
    </Link>




    <Container>
       <Box sx={{
         display:'flex',
         minHeight: '100vh',
         flexDirection:{xs:"column", sm:"column", md:"row"}
       }}>
          <Box sx={{
            width: {xs:'100%', sm:"100%", md:"60%"},
            display: "flex",
            alignItems:{xs:"center", sm:'center'},
            justifyContent:"center",
            flexDirection:{xs:"column", sm:"row"},
            gap: 5
}}>
            <Box sx={{
              display:"flex",
              marginTop:{sm:5},
              alignItems:{xs:"center",sm:"felx-start"},
              justifyContent:{xs:"center",sm:"center",md:"flex-start"},
              width:{xs:"100%", sm:"100%", md:"50%"}
            }}>
              <img style={{borderRadius:"50%"}} src={data.image} alt={data.name} />
            </Box>
          </Box>
          <Box sx={{
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            flexDirection:"column",
            gap: 5

          }}>
                  <Box sx={{
                    textAlign:"center"
                  }}>
                      <Typography variant="h4">{data.name}</Typography>
                  </Box>
                 <Box>
                 <Box sx={{
                   color:{xs:"black", sm:"black", md:"text.primary"},
                   textAlign:"center",
                   marginBottom:1,
                    width:'330px',
                    height:'33px',
                    backgroundColor:"inherit",
                    borderRadius: "30px",
                    border: "1px solid"
                  }}>
                    <Typography variant="subtitle1">Name : {data.name}</Typography>
                  </Box>
                  <Box sx={{
                   color:{xs:"black", sm:"black", md:"text.primary"},
                   textAlign:"center",
                    marginBottom:1,
                    width:'330px',
                    height:'33px',
                    borderRadius: "30px",
                    border: "1px solid"
                  }}>
                    <Typography variant="subtitle1">Species : {data.species}</Typography>
                  </Box>
                  <Box sx={{
                   color:{xs:"black", sm:"black", md:"text.primary"},
                   textAlign:"center",
                    marginBottom:1,
                    width:'330px',
                    height:'33px',
                    borderRadius: "30px",
                    border: "1px solid"
                  }}>
                    <Typography variant="subtitle1">Gender : {data.gender}</Typography>
                  </Box>
                  <Box sx={{
                   color:{xs:"black", sm:"black", md:"text.primary"},
                   textAlign:"center",
                    marginBottom:1,
                    width:'330px',
                    height:'33px',
                    borderRadius: "30px",
                    border: "1px solid"
                  }}>
                    <Typography  variant="subtitle1">Location : {data.location.name}</Typography>
                  </Box>
                  <Box sx={{
                   color:{xs:"black", sm:"black", md:"text.primary"},
                   textAlign:"center",
                    marginBottom:1,
                    width:'330px',
                    height:'33px',
                    borderRadius: "30px",
                    border: "1px solid"
                  }}>
                    <Typography>Episodes : {data.episode.length}</Typography>
                  </Box>
                  <Box sx={{
                   color:{xs:"black", sm:"black", md:"text.primary"},
                   textAlign:"center",
                    marginBottom:1,
                    width:'330px',
                    height:'33px',
                    borderRadius: "30px",
                    border: "1px solid"
                  }}>
                    <Typography>Status : {data.status}</Typography>
                  </Box>
                  <Box sx={{
                   color:{xs:"black", sm:"black", md:"text.primary"},
                    textAlign:"center",
                    marginBottom:1,
                    width:'330px',
                    height:'33px',
                    borderRadius: "30px",
                    border: "1px solid"
                  }}>
                    <Typography>Created : {data.created.split("T")[0]}</Typography>
                  </Box>
                 </Box>
          </Box>



       </Box>
    </Container>
    </Box>
  )
}

export default CharInfo
