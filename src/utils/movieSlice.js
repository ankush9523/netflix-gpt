import { createSlice } from "@reduxjs/toolkit";

 const movieSlice = createSlice({
       name:'movie',
       initialState:{
        nowPlayMovie:null,
        movieTrailer:null,
        popularMovie:null,
       },
       reducers:{
            addNowPlayMovies: (state,action)=>{
                state.nowPlayMovie = action.payload;
            },
            addMovieTrailers:(state,action)=>{
                state.movieTrailer = action.payload;
            },
            addPopularMovie:(state,action)=>{
                state.popularMovie = action.payload;
            }
       }
 })

 export const {addNowPlayMovies,addMovieTrailers,addPopularMovie} = movieSlice.actions;

 export default movieSlice.reducer;