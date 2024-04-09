import React, { useState,useRef } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/Validation';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BGIMG, PROFILEIMG } from '../utils/constants';
const Login = () => {
    const [isSignInForm,setIsSignInForm] = useState(true);
    const [errorMessage,setErrorMessage] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    // console.log(email.current.value)
    const onFormSubmit = () => {
        // console.log(email);
        // console.log(password.current.value);
        const data = checkValidData( email.current.value ,password.current.value);
        setErrorMessage(data);
        if(data) return;
        if(!isSignInForm) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name.current.value, photoURL: PROFILEIMG
                  }).then(() => {
                    const {uid,email,displayName,photoURL} = auth.currentUser;
                    dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
                    navigate('/browse');
                  }).catch((error) => {
                    setErrorMessage(error.message);
                  }); 
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            setErrorMessage(errorCode +" " +errorMessage)
            });
        }else{
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user)
                navigate('/browse');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            setErrorMessage(errorCode +" " +errorMessage)
            });
        }
        

    }
    const onToggleClick = () =>{
        setIsSignInForm(!isSignInForm)
    }
  return (
    <div className=''>
        <Header/>
        <div className='absolute'>
            <img className=''  src={BGIMG} alt='bg-img'/>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className='absolute my-36  mx-auto left-0 right-0 w-3/12 bg-black px-12 py-10 box-content bg-opacity-80  text-white'>
            <h1 className='text-2xl font-bold my-2 p-4'>{isSignInForm ? "Sign In" : "Sign Up" }</h1>
            {!isSignInForm &&  <input type='text' ref={name} placeholder='Full Name' className='m-2  p-4 w-full rounded-md bg-transparent border border-gray-500'/>}
            <input type='email' ref={email} placeholder='Email address' className='m-2  p-4 w-full rounded-md bg-transparent border border-gray-500'/>
            <input type='password' ref={password} placeholder='Password' className='m-2 p-4  w-full rounded-md bg-transparent border border-gray-500'/>
            <span className='text-red-500 p-2 m-2 font-semibold'>{errorMessage}</span>
            <button type='submit' className='m-2 my-4 p-3 w-full bg-red-600 rounded-md' onClick={onFormSubmit}>{isSignInForm ? "Sign In" : "Sign Up" }</button>
            <p className=' cursor-pointer m-2 my-4' onClick={onToggleClick}>New to Netflix? Sign up now. </p>
        </form>
    </div>
  )
}

export default Login