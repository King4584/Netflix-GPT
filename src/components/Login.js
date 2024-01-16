import React from 'react'
import Header from './Header'
import { useState } from 'react'

const Login = () => {

  const [isLogedIn , setIsLogedIn] = useState(false);
  const userSignUp = ()=>{
    setIsLogedIn(!isLogedIn);
  }

  return (
    <div>
        <Header/>
        <div className='absolute' >
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='background-img'/>
        </div>
        <form className='absolute w-3/12 my-36 mx-auto right-0 left-0 bg-opacity-75  bg-black text-white'>
          <div className='mt-8 mx-8 mb-2  text-3xl'>{(!isLogedIn) ? "Sign In" : "Sign Up" }</div>
          <input type='email' placeholder='Email or Phone number' className='p-2 mx-8 my-2 w-8/12 bg-gray-600' />
          <input type='password' placeholder='Password' className='p-2 mx-8 my-2 w-8/12 bg-gray-600' />
          <button className='p-2 mx-8 my-2 bg-red-600 w-8/12'>Sign In </button>
          <h3 className='m-2 p-2' onClick={userSignUp}> {(!isLogedIn) ? "New to Netflix? Sign Up Now" : "Already a User ! Sign In Now" } </h3>
          <h6 className='m-2 p-2 w-10/12 '>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</h6>
        </form>
    </div>
  )
}

export default Login
