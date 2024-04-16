import { BGIMG } from '../utils/constants';
import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMoviceSuggestions from './GptMoviceSuggestions';

const GptSearch = () => {
  return (
    <div>
       <div className='absolute -z-10'>
            <img className=''  src={BGIMG} alt='bg-img'/>
        </div>
      <GptSearchBar/>
      <GptMoviceSuggestions/>
    </div>
  )
}

export default GptSearch;