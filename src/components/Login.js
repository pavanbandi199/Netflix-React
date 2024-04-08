import React, { useState,useRef } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm,setIsSignInForm] = useState(true);
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const onToggleClick = () =>{
        setIsSignInForm(!isSignInForm)
    }
  return (
    <div className=''>
        <Header/>
        <div className='absolute'>
            <img className=''  src='https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='bg-img'/>
        </div>
        <form onSubmit={(e) => {e.preventDefault()}} className='absolute my-36  mx-auto left-0 right-0 w-3/12 bg-black px-12 py-10 box-content bg-opacity-80  text-white'>
            <h1 className='text-2xl font-bold my-2 p-4'>{isSignInForm ? "Sign In" : "Sign Up" }</h1>
            {!isSignInForm &&  <input type='text' ref={name} placeholder='Full Name' className='m-2  p-4 w-full rounded-md bg-transparent border border-gray-500'/>}
            <input type='email' ref={email} placeholder='Email address' className='m-2  p-4 w-full rounded-md bg-transparent border border-gray-500'/>
            <input type='password' ref={password} placeholder='Password' className='m-2 p-4  w-full rounded-md bg-transparent border border-gray-500'/>
            <button type='submit' className='m-2 my-4 p-3 w-full bg-red-600 rounded-md'>{isSignInForm ? "Sign In" : "Sign Up" }</button>
            <p className=' cursor-pointer m-2 my-4' onClick={onToggleClick}>New to Netflix? Sign up now. </p>
        </form>
    </div>
  )
}

export default Login