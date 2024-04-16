import React, { useEffect } from 'react'
import netflixlogo from '../images/netflix logo.png'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGptSearchView } from '../utils/gptSlice';
import { SUPPORTEDLANG } from '../utils/constants';
import {changeLanguage} from '../utils/configSlice';
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store)=> store.user)
  const showLanguage = useSelector((store) => store.gpt.showGptSearch);
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

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  }
  const handleLangChange = (e)=>{
    dispatch(changeLanguage(e.target.value))
  }

  return (
        <div className='absolute w-full bg-gradient-to-b from-black bg-opacity-20 z-10 flex justify-between items-center'>
            <img className=' w-36 mx-10' src={netflixlogo} alt='netflix logo'/>
            {user && 
              <div className='flex gap-5 pr-4 m-2'>
                {showLanguage &&
                <select className='m-2 p-2 bg-gray-600 rounded-lg' onChange={handleLangChange}>
                    {SUPPORTEDLANG.map(lang => <option key={lang.identifer} value={lang.identifer}>{lang.name}</option>)}
                </select>
                }
                <button className='px-3 py-2 rounded-md bg-violet-500' onClick={handleGptSearch}>{showLanguage ? "HomePage" : "Gpt Search"}</button>
                <img className='w-12 h-12 rounded-full' src={user.photoURL} alt='profile logo'/>
                <button className='bg-red-700 px-4 rounded-lg' onClick={handleSignOut}>SignOut</button>
              </div>
            }
        </div>
  )
}

export default Header