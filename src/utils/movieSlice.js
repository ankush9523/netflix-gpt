import { createSlice } from "@reduxjs/toolkit";

 const movieSlice = createSlice({
       name:'movie',
       initialState:{
        nowPlayMovie:null,
        movieTrailer:null
       },
       reducers:{
            addNowPlayMovies: (state,action)=>{
                state.nowPlayMovie = action.payload;
            },
            addMovieTrailers:(state,action)=>{
                state.movieTrailer = action.payload;
            }
       }
 })

 export const {addNowPlayMovies,addMovieTrailers} = movieSlice.actions;

 export default movieSlice.reducer;