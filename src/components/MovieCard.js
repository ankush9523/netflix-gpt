import React from 'react';
import { imgurl } from '../utils/constant';
function MovieCard({poster_path}) {
  if(poster_path)
  return (
    <div className=' relative flex w-40 sm:wd-48 md:w-48 mx-[50%] sm:mx-0 md:mx-0 sm:px-2 md:px-2 py-2  ' >
      {
         <img className='' src={imgurl + poster_path } alt='posterimg'/>
      }
    </div>
  )
}

export const CardWithEnglish =(MovieCard)=>{

  return (props)=>{
    return(
      <div>
        <h1 className=' absolute  p-4 text-white  bg-red-600 z-50'>Eng</h1>
        <MovieCard {...props} />
      </div>
    )
  }
 

}

export default MovieCard;


