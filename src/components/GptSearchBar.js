import React from 'react'
import Lang from '../utils/Lang'
import { useSelector } from 'react-redux'
const GptSearchBar = () => {

    const langKey = useSelector(store => store.configLang.lang)
  return (
    <div className='pt-20 flex justify-center'>
        <form className=' m-2 w-1/2 bg-white mx-auto rounded-lg grid grid-cols-12'>
            <input type='text' className='col-span-9  p-4 m-2 rounded-lg' placeholder={Lang[langKey].GptPlaceHolder} />
            <button className=' col-span-3 py-2 px-4 m-2 bg-red-600 text-white rounded-lg'>{Lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar