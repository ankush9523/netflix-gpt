import React from 'react'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import { useSelector } from 'react-redux';
import {nowPlayMovie} from '../utils/movieSlice';


function MainContainer() {

  const movies = useSelector((store)=>store.movie?.nowPlayMovie);
  //const trailers = useSelector((store)=>store.movie?.movieTrailer);
 
  if(!movies) {
    return
  }
  const mainmovie = movies[0];
  
  return (
    <div>
    <VideoTitle   title={mainmovie.title} overview={mainmovie.overview}/>
    <VideoBackground trailerid={mainmovie.id}/>
    </div>
  )
}

export default MainContainer;