import React, { useEffect } from "react";

import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";
import { youtubeUrl } from "../utils/constant";

function VideoBackground({ trailerid }) {

  useMovieTrailer(trailerid);
 
  const trailer = useSelector((store)=>store.movie?.movieTrailer);

  
  return (
    <div className=" w-screen pt-[25%] sm:pt-[0%] md:pt-[15%] lg:pt-[0%]">
      <iframe
      className=" w-screen  aspect-video"
        src={youtubeUrl + trailer?.key+"?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}

export default VideoBackground;
