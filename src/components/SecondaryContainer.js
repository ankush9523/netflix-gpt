import React from "react";
import MovieLists from "./MovieLists";
import { useSelector } from "react-redux";
function SecondaryContainer() {
  const movies = useSelector((store) => store.movie);
 
  if (movies)
    return (
      <>
        <div className=" bg-black">
          <div className="-mt-0 lg:-mt-48 xl:-mt-72 md:-mt-42 relative z-20 ">
            <MovieLists title={"Now Playing"} movie={movies.nowPlayMovie} />
          </div>

          <MovieLists title={"Popular"} movie={movies.popularMovie} />
        </div>
      </>
    );
}

export default SecondaryContainer;
