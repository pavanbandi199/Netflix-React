import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const Maincontainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if(movies === null) return;
    const mainMovie = movies[0];
    //console.log(mainMovie);
    const {original_title,overview,id} = mainMovie;
  return (
    <div className='overflow-x-clip'>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieId={id} />
    </div>
  )
}

export default Maincontainer