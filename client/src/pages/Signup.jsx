import React from 'react';
import {useState} from 'react'
import {Link,useNavigate} from 'react-router-dom';
import SignupImage from '../assets/images/signup1.jpg'; // Use '..' to navigate up one level if your component is in a subdirectory
import { data } from 'autoprefixer';


export default function Signup() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [state, setstate] = useState({});
  const Session= (e) => {
    // console.log("this is not good dude")

    setstate({
        ...state,
        [e.target.id]:e.target.value,
      });
  };

  console.log(state)

  const submit =async (e) =>{
    e.preventDefault();

    // make a request to the api
try{
    const res=await fetch('/api/auth/signup',
    {
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(state),
    }
    );
    const data = await res.json();
    console.log(data);
    if (data.success === false) {
      setLoading(false);
      setError(data.mes);
      return;
    }
    setLoading(false);
    setError(null);
    navigate('/sign-in');
  }
    catch (error) {
      setLoading(false);
      setError(error.mes);
    }





  };

    return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center select-none p-2"> 
      
        <div className="bg-white p-8 rounded shadow-md  max-w-7xl mx-auto md:flex">
          <div className="md:w-1/2 p-4">
          
            <img
              src={SignupImage} // Replace with the URL of your image
              alt="Signup Image"
              className="w-auto h-full "
            />
          </div>
          <div className="md:w-1/2 p-4">
            <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
              <form onSubmit={submit}>
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-gray-600">First Name</label>
              <input
                type="text"
                id="username"
                className="w-full border p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
                placeholder="username"
                onChange={Session}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block text-gray-600">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                className="w-full border p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Phone Number"
                onChange={Session}

              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600">Email</label>
              <input
                type="email"
                id="email"
                className="w-full border p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
                placeholder="youremail@example.com"
                onChange={Session}

              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-600">Password</label>
              <input
                type="password"
                id="password"
                className="w-full border p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
                placeholder="********"
                onChange={Session}

              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600 transition duration-300"
              disabled={loading ? true : false}
            >
              Sign Up
            </button>
     
              </form>
              <div className='flex gap-2'>
                <p>Have an account?</p>
                <Link to={"/sign-in"}>
                  <span className='text-cyan-500'>Sign-In</span>
                </Link>
      
              </div>
              {error && <p className='text-red-500 mt-5'>{error}</p>}

           
          </div>
        </div>
      </div>
    );


}


