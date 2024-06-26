import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies &&
    <div className='bg-black '>
      <div className='-mt-64 pl-3 relative z-20'>
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
        <MovieList title="Trending" movies={movies.trendingMovies} />
        <MovieList title="Latest Releases" movies={movies.upcomingMovies} />
        <MovieList title="Popular" movies={movies.popularMovies} />
        <MovieList title="Horror" movies={movies.nowPlayingMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer