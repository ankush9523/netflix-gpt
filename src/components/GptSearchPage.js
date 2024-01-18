import React, { useEffect, useRef } from "react";
import { banner, options } from "../utils/constant";
import { useSelector } from "react-redux";
import { languageList } from "../utils/langConstant";
import { useDispatch } from "react-redux";
import { addgptMovie } from "../utils/gptSlice";
import GptSerachedMovie from "./GptSerachedMovie";



function GptSearchPage() {
  const lang = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();
  const searchedValue = useRef();
  

  const GetSearchApi = async(movie)=>{
    let result = await fetch("https://api.themoviedb.org/3/search/movie?query="+ movie +"&include_adult=false&language=en-US&page=1",options);
    let json = await result.json();
    
      dispatch(addgptMovie({movies:json.results, searchedText:movie}));
   

  }
  const handleSearchClick = ()=>{
      GetSearchApi(searchedValue.current.value);
  
  }
 

  if (!lang) return;
  return (
    <>
      <div className="absolute">
        <img className=" h-screen w-screen object-cover" src={banner} alt="banner" />
      </div>
      <div className="sm:pt-[20%] md:pt-[15%] pt-[35%]">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-black w-full sm:w-9/12 md:w-6/12 sm:mx-[10%] md:mx-[25%]  flex flex-row absolute"
        >
          <input
          ref={searchedValue}
            className="m-3 basis-9/12 rounded-md p-3"
            type="text"
            placeholder={languageList[lang].gptSearchPlaceholder}
          />
          <button
          onClick={handleSearchClick}
            className=" basis-3/12 bg-red-600 text-white font-bold p-3 m-3 rounded-md"
          >
            {languageList[lang].gptSearch}
          </button>
        </form>
      </div>
      <GptSerachedMovie/>
    </>
  );
}

export default GptSearchPage;
