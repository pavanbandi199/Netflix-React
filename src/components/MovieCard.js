import React from 'react'
import { CDN_IMG_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-[200px] mx-2'>
        <img src={CDN_IMG_URL+posterPath} alt='movie poster'/>
    </div>
  )
}

export default MovieCard