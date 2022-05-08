import Chars from "./components/Chars";
import Navbar from "./components/Navbar";
import CharInfo from "./components/CharInfo";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { Box } from "@mui/material";
import { darkTheme, lightTheme } from "./Mode";
import { GetCharContext } from "./Context/CharactersContext";
import './App.css'
import Favorites from "./components/Favorites";




function App() {
  const {mode} = GetCharContext()
  return (
    <ThemeProvider theme={mode === 'light'? lightTheme : darkTheme}>
    <Box sx={{backgroundColor: 'background.default', color:"text.primary",minHeight: "100vh"}}>
    <BrowserRouter>
    <Navbar/>
          <Routes>
            <Route path={'/'} element={<Chars/>}/>
            <Route path={'/characters/:id'} element={<CharInfo/>}/>
            <Route path={'/favorites'} element={<Favorites/>}/>
          </Routes>
    </BrowserRouter>
    </Box>
    </ThemeProvider>

  );
}

export default App;
