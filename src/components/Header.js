import React from 'react'
import netflixlogo from '../images/netflix logo.png'
const Header = () => {
  return (
        <div className='absolute w-full bg-gradient-to-b from-black bg-opacity-20 z-10'>
            <img className=' w-36 mx-10' src={netflixlogo} alt='netflix logo'/>
        </div>
  )
}

export default Header