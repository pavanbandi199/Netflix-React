import React from 'react'
import Header from './Header'
import useNowPlayingMOvies from '../hooks/useNowPlayingMovies'
import Maincontainer from './Maincontainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  useNowPlayingMOvies();
  
  return (

    <div>
      <Header/>
      <Maincontainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse