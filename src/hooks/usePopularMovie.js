import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {options} from '../utils/constant';
import { addPopularMovie } from "../utils/movieSlice";

const usePopularMovie = ()=>{
   const dispatch = useDispatch();
  const getPopularMovieApi = async()=>{
     let result = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1',options);
     let json = await result.json();
     dispatch(addPopularMovie(json.results));
  }
  useEffect(()=>{
   getPopularMovieApi();
  },[]);
}

export default usePopularMovie; 