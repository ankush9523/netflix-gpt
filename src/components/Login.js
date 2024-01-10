import React, { useState } from 'react'
import Header from './Header'

function Login() {

  const [isSignInForm, setIsSignInForm] = useState(true);

  function toggleSignInForm(){

    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/b8dd5151-d491-4e91-b1fb-a19df70df5fc/7acd48e1-92f0-4aa7-bcc6-684b3ee50946/IN-en-20240102-trifectadaily-perspective_alpha_website_small.jpg' alt='banner'/>
        </div>
        <form className='w-3/12 text-white p-12 bg-black absolute my-36 mx-auto right-0 left-0 bg-opacity-85 rounded-md'>
        <h1 className='font-bold text-3xl px-2 py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm ? (<input type='text' placeholder='Full Name' className='p-2 m-2 w-full  bg-gray-800 rounded-sm'/>) : null}
            <input type='text' placeholder='Email Address' className='p-2 m-2 w-full bg-gray-800 rounded-sm' />
            <input type='password' placeholder='Password' className='p-2 m-2 w-full  bg-gray-800 rounded-sm'/>
            <button className='p-2 m-2 bg-red-700 w-full rounded-sm'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <div className=' flex px-2'>
            <input type="checkbox"  className=' w-8' />
            <p  className=' text-gray-300 text-xs'>Remember me </p>
            </div>
            <p className=' text-gray-300 text-xs float-right'>Need help?</p>
            
          

            <p className='py-16 px-2 text-gray-400'> {isSignInForm ? "New To Netflix?" : "Already registered?"} <span onClick={toggleSignInForm} className='text-white cursor-pointer'>{isSignInForm ? "Sign Up Now.":"Sign In Now"}</span></p>
        </form>
    </div>
  )
}

export default Login