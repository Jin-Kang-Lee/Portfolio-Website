'use client';

import React, {useEffect, useReducer, useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'



const Navbar = () => {

    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)
    const [navBg, setNavBg] = useState('#ecf0f3')


    const handleNav = () => {
      setNav(!nav)
    }

    useEffect(() => {
      const shadowHandler = () => {
        if (window.scrollY >= 90) {
          setShadow(true)
        }
        else {
          setShadow(false)
        }
      }
      window.addEventListener('scroll', shadowHandler)
    }, [])

  return (
    <div style={{backgroundColor: '#ecf0f3'}} className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        
        <Link href='/#home'>
          <Image src="/assets/JK-Logo.png" alt="Logo" width={75} height={30} />
        </Link>
        
        <div>
          <ul className='hidden md:flex'>
            <Link href='/#home'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
            </Link>

            <Link href='/#about'>
              <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
            </Link>

            <Link href='/#experience'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Experience</li>
            </Link>

            <Link href='/#projects'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
            </Link>

            <Link href='/#contact'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
            </Link>
          </ul>
        </div>
        <div onClick={handleNav} className='md:hidden'>
          <AiOutlineMenu size={25}/>
        </div>
      </div>

      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div className={nav ? 'fixed left-[0%] top-0 w-[75%] sm:w[60%] md:w[45%] h-screen bg-[#ecf0f3] p-10 ease-in-out duration-500' 
                            : 'fixed right-[100%] p-10 top-0 ease-in-out duration-500'}>
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href="/#home">
                <Image src='/assets/JK-Logo.png' width='87' height='35' alt='/'/>
              </Link>
              
              <div onClick={handleNav} className='rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer'>
                <AiOutlineClose/>
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w[90%] py-4'>Build to inspire. Inspired to build.</p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul>
              <Link href='/#home'>
              <li onClick={() => setNav(false)} className='py-4 text-sm'>Home</li>
              </Link>

              <Link href='/#about'>
              <li onClick={() => setNav(false)} className='py-4 text-sm'>About</li>
              </Link>

              <Link href='/#experience'>
              <li onClick={() => setNav(false)} className='py-4 text-sm'>Experience</li>
              </Link>

              <Link href='/#projects'>
              <li onClick={() => setNav(false)} className='py-4 text-sm'>Projects</li>
              </Link>

              <Link href='/#contact'>
              <li onClick={() => setNav(false)} className='py-4 text-sm'>Contact</li>
              </Link>
            </ul>
            <div className='pt-40'>

              <p className='uppercase tracking-widest text-[#5651e5]'>
                Let's Connect
              </p>

              <div className='flex items-center justify-between my-4 w-full sm:w-[70%]'>
                <a href='https://www.linkedin.com/in/jinkang-lee/'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaLinkedinIn/>
                </div>
                </a>
                
                <a href='https://github.com/Jin-Kang-Lee'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaGithub/>
                </div>
                </a>

                <a href='https://mail.google.com/'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <AiOutlineMail/>
                </div>
                </a>
                
                <Link href='/#contact'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <BsFillPersonLinesFill onClick={() => setNav(false)}/>
                </div>
                </Link>
                

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
