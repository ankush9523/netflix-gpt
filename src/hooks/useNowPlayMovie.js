 import { useDispatch } from "react-redux";
 import { useEffect } from "react";
import {options} from '../utils/constant';
import { addNowPlayMovies } from "../utils/movieSlice";

const useNowplayMovie = ()=>{
    const dispatch = useDispatch();
   const getNowPlayingMovieApi = async()=>{
      let result = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',options);
      let json = await result.json();
      dispatch(addNowPlayMovies(json.results));
   }
   useEffect(()=>{
    getNowPlayingMovieApi();
   },[]);
}

 export default useNowplayMovie; 