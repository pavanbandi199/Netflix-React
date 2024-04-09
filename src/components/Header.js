import React, { useEffect } from 'react'
import netflixlogo from '../images/netflix logo.png'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store)=> store.user)

    const handleSignOut =() =>{
      signOut(auth).then(() => {
        navigate('/');
      }).catch((error) => {
        navigate('/error');
      });
    }
    useEffect(()=>{
      const unsubscribe =  onAuthStateChanged(auth, (user) => {
          if (user) {
            const {uid,email,displayName,photoURL} = user;
            dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
            navigate('/browse');
          } else {
            dispatch(removeUser());
            navigate('/');
          }
        });
        return () => unsubscribe();
  },[])

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