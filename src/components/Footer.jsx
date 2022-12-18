import React from 'react';
import { FaInstagram, FaDiscord, FaYoutube, FaGithub, FaLinkedin } from 'react-icons/fa';
import {Link} from 'react-router-dom'

const Footer = () => {
    return(
        <div className='w-full bg-gray-100 py-16'>
            <div className='max-w-[1040px] mx-auto flex flex-col px-4'>
                <div className='sm:flex text-center justify-between items-center'>
                    <h1>VISITBALI.</h1>
                    <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
                        <a href='https://www.instagram.com/jodywjy_'><FaInstagram className='icon' /></a>
                        <a href='https://github.com/asterjody'><FaGithub className='icon' /></a>
                        <a href='https://www.youtube.com/channel/UCp2CHtO_SdSALNG7DZ-vu3g'><FaYoutube className='icon' /></a>
                        <a href='linkedin.com/in/jody-wijaya-052b31151/'><FaLinkedin className='icon' /></a>
                        <a href='https://www.instagram.com/jodywjy_'><FaDiscord className='icon' /></a>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <ul className='lg:flex'>
                        <li>
                            <Link to='/'>About</Link>
                        </li>
                        <li>
                            <Link to='/'>Partner</Link>
                        </li>
                        <li>
                            <Link to='/'>Careers</Link>
                        </li>
                        <li>
                            <Link to='/'>News</Link>
                        </li>
                        <li>
                            <Link to='/'>Advertising</Link>
                        </li>
                    </ul>
                    <ul className='text-right lg:flex'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Destination</li>
                        <li>Services</li>
                        <li>Book</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer