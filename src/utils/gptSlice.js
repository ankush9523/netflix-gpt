import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        gptSearch : false,
        searchedMovie:null,
        searchedText:null
    },
    reducers:{
        addGptSearch : (state, action)=>{
               state.gptSearch = action.payload;
        },
        addgptMovie : (state,action)=>{
            const {movies, searchedText} = action.payload;
            state.searchedMovie = movies;
            state.searchedText = searchedText;
        }
    }
})

export const{addGptSearch,addgptMovie} = gptSlice.actions;

 export default gptSlice.reducer;