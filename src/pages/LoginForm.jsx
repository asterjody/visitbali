import React from 'react'
import heroVid from '../assets/videos/home.mp4';
import { Link } from 'react-router-dom';
import {AiOutlineSearch} from 'react-icons/ai'

const LoginForm = () => {
  return (
    <div className='w-full h-screen relative'>
    <video className='w-full h-full object-cover' src={heroVid} 
                                                autoPlay 
                                                loop 
                                                muted 
    />
        <div className='absolute w-full h-full top-0 left-0 bg-black/30'></div>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
          <h1 className='py-4'>Login VISITBALI.</h1>
          <form className='max-w-full'>
            <div className='flex flex-col my-2'>
            <label>Username</label>
            <input type='text' className='text-black border rounded-md p-2'/>
            <label>Password</label>
            <input type='password' className='text-black border rounded-md p-2'/>
            <button className='my-4'><Link to='/'><b>LOGIN</b></Link></button>
            </div>
          </form>    
        </div>
    </div>
  )
}

export default LoginForm