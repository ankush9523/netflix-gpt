import React, { useEffect, useState } from 'react'
import Header from './Header';
import useNowplayMovie from '../hooks/useNowPlayMovie';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovie from '../hooks/usePopularMovie';


function Browse() {
   useNowplayMovie();
   usePopularMovie();
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
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse;