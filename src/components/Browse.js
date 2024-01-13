import React, { useEffect, useState } from 'react'
import Header from './Header';
import useNowplayMovie from '../hooks/useNowPlayMovie';
import MainContainer from './MainContainer';


function Browse() {
   useNowplayMovie();
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
    </div>
  )
}

export default Browse;