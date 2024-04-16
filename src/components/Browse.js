import React from 'react'
import Header from './Header'
import useNowPlayingMOvies from '../hooks/useNowPlayingMovies'
import Maincontainer from './Maincontainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  useNowPlayingMOvies();
  usePopularMovies();
  useTrendingMovies();
  useUpcomingMovies();
  
 
  return (

    <div>
      <Header/>
      {showGptSearch ?(<GptSearch/>) :( <> <Maincontainer/>
      <SecondaryContainer/> </>) }
      
     
    </div>
  )
}

export default Browse