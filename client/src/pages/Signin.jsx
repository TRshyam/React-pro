import React from 'react';
import {useState} from 'react'
import {Link,useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart,signInSuccess,signInFailure } from '../redux/user/userSlice';


export default function Signin() {
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  const {loding,error}=useSelector((state)=>state.user);
  const navigate = useNavigate();
  const dispatch =useDispatch()

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
  dispatch(signInStart())
    const res=await fetch('/api/auth/signin',
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
      dispatch(signInFailure(data.mes))
      // setError(data.mes);
      return;
    }
    dispatch(signInSuccess(data))

    // setError(null);
    navigate('/');
  }
    catch (error) {
      // setError(error.mes);
      dispatch(signInFailure(error.mes))

    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
        <form onSubmit={submit}>
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
          >
            Sign in
          </button>

        </form>
        <p>Dont have an account?</p>
            <Link to={"/sign-up"}>
              <span className='text-cyan-500'>Sign-UP</span>
            </Link>
      </div>
    </div>
  );
}

