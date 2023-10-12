import React from 'react'
import {FaSearch} from 'react-icons/fa'

export default function Header() {
  return (
    <nav className='bg-red-200 flex justify-around m-0' >
        <h1 className='font-black text-sm sm:text-xl flex flex-wrap justify-around m-2'>
        <span className=' text-cyan-400'>Arashi</span>
        <span>Medicals</span>
        </h1>
        <rightnav className='flex m-2'>
            <ul className='flex mx-4'>
                <li className='mx-2 px-4 hover:bg-green-200 bottom-0 rounded-lg select-none '>Home</li>
                <li className='mx-2 px-4 hover:bg-green-200 bottom-0 rounded-lg select-none '>About</li>
                <li className='mx-2 px-4 hover:bg-green-200 bottom-0 rounded-lg select-none'>Contact</li>
                <li className='mx-2 px-4 hover:bg-green-200 bottom-0 rounded-lg select-none '>DetaILS</li>
            </ul>
            <form className='bg-red-100  rounded-lg flex items-center'>
              <input type='text' className='rounded-lg px-2 bg-transparent select-none' placeholder='    Search'/>
              <FaSearch className=' text-slate-400  mx-6 '/>
            </form>
        </rightnav>
    </nav>
  )
}
