import React from "react";
import MovieCard, { CardWithEnglish } from "./MovieCard";

function MovieLists({ title , movie}) {

  const EnglishMovieCard = CardWithEnglish(MovieCard);
    if(movie)
    //console.log(movie[0].original_language)
  return (

    <div className="px-6 py-2  right-2" >
    <h1 className=" font-bold text-2xl sm:px-2 md:px-2 mx-20 sm:mx-0 md:mx-0 text-white capitalize">{title}</h1>
      <div className="flex overflow-x-scroll ">
        
        <div className=" flex flex-col sm:flex-row md:flex-row mt-4">
        {
            movie.map((movies)=>
              
           

              <MovieCard  key={movies.id} poster_path={movies.poster_path} />,
                 
               {/*  <>
              {
               movies.original_language === "en" 
               ?
               (<EnglishMovieCard key={movies.id} poster_path={movies.poster_path}/>)
               :
               (<MovieCard  key={movies.id} poster_path={movies.poster_path} />)
              }
              
              </> */}

            
             
            )
        }
          
        </div>
      </div>
    </div>
  );
}

export default MovieLists;
