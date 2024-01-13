import React,{useEffect} from 'react';
import { options } from '../utils/constant'
import { useDispatch } from 'react-redux';
import { addMovieTrailers } from '../utils/movieSlice';


function useMovieTrailer(trailerid) {
    
    const dispatch = useDispatch();

    const getMovieTrailer = async()=>{
        let result = await fetch ("https://api.themoviedb.org/3/movie/"+trailerid+"/videos?",options);
        let json = await result.json();

        const filterData = json.results.filter((video)=>video.type ==="Trailer");
        const mainTrailer = filterData.length ? filterData[0] : json.results[0]; 
        dispatch(addMovieTrailers(mainTrailer));
      }
  
      useEffect(()=>{
        getMovieTrailer();
      },[])
}

export default useMovieTrailer;