import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { useQuery, useQueryClient } from "react-query"

const CharContext = createContext() 

const CharactersContext = ({children}) => {
   const [mode, setMode] = useState('dark')
   const [searchText, setSearchText] = useState("")
  //  const [favorites, setFavorites] = useState([])
   const [favorites, dispatch] = useReducer((state, action) =>{
     if(action.type === 'add'){
       return [...state, action.payload]
     }
     else if(action.type === 'remove'){
       return state.filter(e => e.name !== action.payload.name)
     }
   }, [])

  return (
    <CharContext.Provider value={{mode, setMode, searchText ,setSearchText, favorites, dispatch}}>
            {children}
    </CharContext.Provider>
  )
}

export const GetCharContext = () => {
    const {mode, setMode, searchText, setSearchText, favorites, dispatch} = useContext(CharContext)
    return {mode, setMode, setSearchText, searchText, favorites, dispatch}
}

export default CharactersContext
