import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-40 mt-18 px-12 h-screen absolute text-white bg-black bg-opacity-10  '>
      <h1 className='text-5xl w-1/4 font-bold '>{title}</h1>
      <p className='text-lg w-1/4 '>{overview}</p>
      <div className='mt-3' >
        <button className='text-lg py-2 px-10 font-bold bg-white hover:bg-opacity-80 text-black rounded-lg mr-1'> Play</button>
        <button className='text-lg py-2 px-8 font-bold bg-slate-700 hover:bg-opacity-55 text-white rounded-lg ml-1'> more info</button>
      </div>
    </div>
  )
}

export default VideoTitle