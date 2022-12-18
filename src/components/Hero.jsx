import React from 'react';
import heroVid from '../assets/videos/home.mp4';
import {AiOutlineSearch} from 'react-icons/ai'

const Hero = () => {
    return(
        <div className='w-full h-screen relative'>
            <video className='w-full h-full object-cover' src={heroVid} 
            autoPlay 
            loop 
            muted 
            />
            <div className='absolute w-full h-full top-0 left-0 bg-gray-900/20'></div>
            <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
                <h1>  The Heaven on Earth</h1>
                <h2 className='py-3'> Order Your Tickets Now!</h2>
                <form className='flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/90'>
                    <div>
                        <input className='bg-transparent sm: w-[300px] font-[Poppins] focus:outline-none' type='text' placeholder='Search Destinations' />
                    </div>
                    <div>
                        <button><AiOutlineSearch size={20} className='icon' style={{color:'#ffffff'}}  /></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Hero;