import React from 'react'
import Link from 'next/link'
import {AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>
                    - BUILD TO INSPIRE, INSPIRE TO BUILD -
                </p>

                <h1 className='py-4 text-gray-700'>
                    Hi, I'm <span className='text-[#504be7]'>Jin Kang</span>
                </h1>

                <h1 className='py-2 text-gray-700'>
                    An Aspiring Developer and Engineer
                </h1>

                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                    I'm an aspiring machine learning engineer and software developer who wishes to build and innovative solutions that positively impact the world.
                    With a passion for machine learning and software development, 
                    I aim to contribute to cutting-edge technologies that address complex challenges.
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <a href='https://www.linkedin.com/in/jinkang-lee/'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaLinkedinIn/>
                        </div>
                    </a>
                    
                    <a href='https://github.com/Jin-Kang-Lee'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaGithub/>
                    </div>
                    </a>
                    
                    <a href='https://mail.google.com/'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail/>
                    </div>
                    </a>
                    
                    <Link href='/#contact'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsFillPersonLinesFill/>
                    </div>
                    </Link>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main