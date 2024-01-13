import React from "react";

function VideoTitle({ title, overview }) {
  return (
    <div className=" w-screen aspect-video text-white py-52 px-20 absolute bg-gradient-to-r from-black">
      <h1 className=" py-5 font-bold  text-6xl">{title}</h1>
      <p className="  py-4 w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black font-semibold   px-12 py-4  rounded-lg hover:bg-opacity-80">
          Play
        </button>
        <button className=" bg-gray-800 text-white font-semibold px-12 py-4 mx-2  rounded-lg hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;
