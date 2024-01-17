import React, { useEffect, useState } from 'react'
import Header from './Header';
import useNowplayMovie from '../hooks/useNowPlayMovie';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovie from '../hooks/usePopularMovie';
import { useSelector } from 'react-redux';
import GptSearchPage from './GptSearchPage';


function Browse() {
   useNowplayMovie();
   usePopularMovie();

   const gptValue = useSelector((store)=>store.gpt.gptSearch);
  return (
    <div>
    {/**
      maincontainer
       ->videoBackground
       ->VideoTitle
       ->overview
       ->buttons play info
      secondary container 
       ->movielist*n
          - moviecard*n
    */}
      <Header/>
      {
       gptValue ? 
        
        <GptSearchPage/>
       :
       <>
       <MainContainer/>
      <SecondaryContainer/>
       </>
      }
     
    </div>
  )
}

export default Browse;