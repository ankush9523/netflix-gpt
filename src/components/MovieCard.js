import React from 'react';
import { imgurl } from '../utils/constant';
function MovieCard({poster_path}) {
  return (
    <div className=' relative flex w-48 px-2' >
      {
         <img className='' src={imgurl + poster_path } alt='posterimg'/>
      }
    </div>
  )
}

export default MovieCard