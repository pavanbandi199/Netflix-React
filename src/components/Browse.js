import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMOvies from '../hooks/useNowPlayingMovies'
import Maincontainer from './Maincontainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';


const Browse = () => {
  useNowPlayingMOvies();
  usePopularMovies();
  useTrendingMovies();
  useUpcomingMovies();
  
 
  return (

    <div>
      <Header/>
      <Maincontainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse