import React from 'react';
import { useSelector } from 'react-redux';
import MovieLists from '../components/MovieLists'

function GptSerachedMovie() {
    const movies = useSelector((store)=>store.gpt.searchedMovie);
    const movietitle = useSelector((store)=>store.gpt.searchedText);
    if(movies && movietitle) 
  return (
    <div className='absolute mt-[25%] md:mt-[10%] bg-black bg-opacity-90 w-full text white'>
        
        {
            movies.length===0 ?
            <h1 className='text-white md:text-2xl md:font-bold capitalize pt-[5%] pb-[5%] px-[20%] md:px-[35%] '> searched movie not found</h1>
            :
            <MovieLists title={movietitle} movie={movies} />

        }

    </div>
  )
}

export default GptSerachedMovie