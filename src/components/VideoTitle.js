import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-40 mt-28 px-12 absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
      <h1 className='text-5xl w-1/4 font-bold '>{title}</h1>
      <p className='text-lg w-1/4 ml-4'>{overview}</p>
      <div className='mt-3' >
        <button className='text-lg py-2 px-10 font-bold bg-white hover:bg-opacity-80 text-black rounded-lg mr-1'> Play</button>
        <button className='text-lg py-2 px-8 font-bold bg-slate-700 hover:bg-opacity-55 text-white rounded-lg ml-1'> more info</button>
      </div>
    </div>
  )
}

export default VideoTitle