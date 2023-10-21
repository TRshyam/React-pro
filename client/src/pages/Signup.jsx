import React from 'react'
import {Link} from 'react-router-dom'
import SignupImage from '../assets/images/signup1.jpg'; // Use '..' to navigate up one level if your component is in a subdirectory


export default function Signup() {
    return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center select-none"> 
      
        <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl mx-auto md:flex">
          <div className="md:w-1/2 p-4">
          
            <img
              src={SignupImage} // Replace with the URL of your image
              alt="Signup Image"
              className="w-auto h-full "
            />
          </div>
          <div className="md:w-1/2 p-4">
            <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
              <form>
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-gray-600">First Name</label>
              <input
                type="text"
                id="firstName"
                className="w-full border p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
                placeholder="First Name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block text-gray-600">Last Name</label>
              <input
                type="text"
                id="lastName"
                className="w-full border p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Last Name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block text-gray-600">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                className="w-full border p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Phone Number"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600">Email</label>
              <input
                type="email"
                id="email"
                className="w-full border p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
                placeholder="youremail@example.com"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-600">Password</label>
              <input
                type="password"
                id="password"
                className="w-full border p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
                placeholder="********"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-gray-600">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full border p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
                placeholder="********"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600 transition duration-300"
            >
              Sign Up
            </button>
            <p>Have an account?</p>
            <Link to={"/sign-in"}>
              <span className='text-cyan-500'>Sign-In</span>
            </Link>
              </form>
          </div>
        </div>
      </div>
    );


}


