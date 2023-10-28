import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  deleteUserFailure,
  deleteUserSuccess,
  signOutUserStart,
} from '../redux/user/userSlice';
import { useDispatch } from 'react-redux';


export default function Header() {

  const dispatch = useDispatch()
  const { currentUser } = useSelector(state => state.user)

  const SignOut = async () => {
    try {
      dispatch(signOutUserStart());
      const res = await fetch('/api/auth/signout');
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure(data.message));
    }
  };





  return (
    <nav className='bg-red-200 flex justify-around m-0' >
      <Link to='/'>
        <h1 className='font-black text-sm sm:text-xl flex flex-wrap justify-around m-2'>
          <span className='text-cyan-400 pr-2'>Arashi</span>
          <span className='pl-0.5'>Medicals</span>
        </h1>

      </Link>
      <rightnav className='flex m-2'>
        <ul className='flex mx-4'>
          <Link to='/' >
            <li className='mx-2 px-4 hover:bg-green-200 bottom-0 rounded-lg select-none hidden md:inline '>
              Home
            </li>
          </Link>
          <Link to='/about' >
            <li className='mx-2 px-4 hover:bg-green-200 bottom-0 rounded-lg select-none hidden md:inline '>
              About
            </li>
          </Link>
          <Link to='/contact' >

            <li className='mx-2 px-4 hover:bg-green-200 bottom-0 rounded-lg select-none hidden md:inline'>
              Contact
            </li>
          </Link>
          <Link to='/details' >
            <li className='mx-2 px-4 hover:bg-green-200 bottom-0 rounded-lg select-none hidden md:inline '>
              DetaILS
            </li>
          </Link>
        </ul>
        <form className='bg-red-100  rounded-lg flex items-center'>
          <input type='text' className='rounded-lg px-2 bg-transparent select-none' placeholder='    Search' />
          <FaSearch className=' text-slate-400  mx-6 ' />
        </form>

        <Link to='/profile' >
          {currentUser ? (
            <img src={currentUser.avatar} alt='profil' className='w-8 h-8 rounded-xl' />
          ) : (
            <li className='mx-2 px-4 hover:bg-green-200 bottom-0 rounded-lg select-none hidden md:inline '>
              Sign-In
            </li>
          )}
        </Link>
        <Link>
          <button onClick={SignOut}>LogOut</button>
        </Link>


      </rightnav>
    </nav>
  )
}
