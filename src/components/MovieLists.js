import React from "react";
import MovieCard from "./MovieCard";

function MovieLists({ title , movie}) {
    if(movie)
  return (

    <div className="px-6 py-2  right-2" >
    <h1 className=" font-bold text-2xl px-2  text-white capitalize">{title}</h1>
      <div className="flex hover:overflow-x-scroll">
        
        <div className=" flex mt-4">
        {
            movie.map((poster)=>
            <MovieCard  key={poster.id} poster_path={poster.poster_path} />
            )
        }
          
        </div>
      </div>
    </div>
  );
}

export default MovieLists;
