import React,{useState} from 'react'
import {BsPerson} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import { FaInstagram, FaDiscord, FaYoutube, FaGithub, FaLinkedin } from 'react-icons/fa';
import {Link} from 'react-router-dom'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [logo, setLogo] = useState(false)
    const handleNav = () =>{
        setNav(!nav);
        setLogo(!logo)
    };

    return(
        <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
            <div>
                <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>VISITBALI.</h1>
            </div>

            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Destination</li>
                <li>Services</li>
                <li>Book</li>
            </ul>

            <div className='hidden md:flex'>
                <BiSearch className='mr-4' size={20}/>
                <Link to='/login'><BsPerson size={20}/></Link>
            </div>

            {/* Hamburger */}
            <div onClick={handleNav} className='md:hidden z-10'>
                {nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenuAlt4 size={20} />}
            </div>

            {/* Navigation Menu Mobile */}
            <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
                <ul>
                    <h1>VISITBALI.</h1>
                    <li className='border-b'>Home</li>
                    <li className='border-b'>About</li>
                    <li className='border-b'>Destination</li>
                    <li className='border-b'>Services</li>
                    <li className='border-b'>Book</li>
                    <div className='flex flex-col'>
                        <button className='my-6'><Link>Search</Link></button>  
                        <button><Link to='/login'>Account</Link> </button>
                    </div>
                    <div className='flex justify-between my-6'>
                        <a href='https://www.instagram.com/jodywjy_'><FaInstagram className='icon' /></a>
                        <a href='https://github.com/asterjody'><FaGithub className='icon' /></a>
                        <a href='https://www.youtube.com/channel/UCp2CHtO_SdSALNG7DZ-vu3g'><FaYoutube className='icon' /></a>
                        <a href='linkedin.com/in/jody-wijaya-052b31151/'><FaLinkedin className='icon' /></a>
                        <a href='https://www.instagram.com/jodywjy_'><FaDiscord className='icon' /></a>
                    </div>   
                </ul>
            </div>

        </div>
    )
}

export default Navbar