import React, { useState } from 'react';
import Header from './Header';

const Login = () => {

    const [isSignIn, setSignIn] = useState (true);

    const toggleSignInForm = () => {
        setSignIn(!isSignIn)
    }

  return (
    <div className="relative h-screen">
      <Header />
      {/* Background Image */}
      <div className="absolute inset-0 bg-gray-200">
        <img
          className="absolute inset-0 object-cover w-full h-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_large.jpg"
          alt="Netflix Background"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      {/* Sign-in Form */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <form className="bg-black bg-opacity-75 p-10 w-3/12 rounded-lg shadow-lg">
          <h1 className="font-bold text-3xl text-white mb-6">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && <input
            type="text"
            placeholder="Name"
            className="w-full p-3 my-2 mb-4 rounded-lg bg-gray-700 shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
          />
}
          <input
            type="text"
            placeholder="Email Address"
            className="w-full p-3 mb-4 rounded-lg bg-gray-700 shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-6 rounded-lg bg-gray-700 shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
          />
          <button
            type="submit"
            className="w-full my-4 bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg shadow-md transition duration-300 ease-in-out"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>

          <p className='text-white mt-6 cursor-pointer' onClick={toggleSignInForm}>
          {isSignIn 
            ? "New to Netflix Sign Up Now"
            : "Alerady Registered Sing In Now" 
          }
          </p>
          <p className='text-gray-500 text-xs mt-6' >This page is protected by Google reCAPTCHA to ensure you're not a bot. 
            <span className='text-blue-400 cursor-pointer'>Learn more.</span></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
