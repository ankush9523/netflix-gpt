import React from "react";

function VideoTitle({ title, overview }) {
  return (
    <div className=" w-screen aspect-video text-white py-[30%] sm:py-[20%] md:py-52 lg:py-[10%] px-4 sm:px-10 md:px-20 absolute lg:bg-gradient-to-r from-black">
      <h1 className="sm:py-4 md:py-5  font-semibold sm:font-bold md:font-bold lg:font-bold text-xl sm:text-2xl md:text-4xl lg:text-4xl">{title}</h1>
      <p className=" hidden  md:hidden lg:block py-4 lg:py-2 w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black md:font-semibold  px-4 md:px-12 py-1 md:py-4  rounded-lg hover:bg-opacity-80">
          Play
        </button>
        <button className=" bg-gray-800 text-white md:font-semibold px-4 md:px-12 py-1 md:py-4  mx-4 md:mx-2  rounded-lg hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;
