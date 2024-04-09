import React from 'react'
import netflixlogo from '../images/netflix logo.png'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store)=> store.user)

    const handleSignOut =() =>{
      signOut(auth).then(() => {
        navigate('/');
      }).catch((error) => {
        navigate('/error');
      });
    }

  return (
        <div className='absolute w-full bg-gradient-to-b from-black bg-opacity-20 z-10 flex justify-between items-center'>
            <img className=' w-36 mx-10' src={netflixlogo} alt='netflix logo'/>
            {user && 
              <div className='flex gap-5 pr-4 m-2'>
                <img className='w-12 h-12 rounded-full' src={user.photoURL} alt='profile logo'/>
                <button className='bg-red-700 px-4 rounded-lg' onClick={handleSignOut}>SignOut</button>
              </div>
            }
        </div>
  )
}

export default Header