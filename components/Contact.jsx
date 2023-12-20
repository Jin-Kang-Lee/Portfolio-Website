import React from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import Link from 'next/link'


const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
          <p className='uppercase text-xl tracking-widest text-[#504be7]'>Contact</p>
          <h2 className='py-4'>Keep In Touch</h2>
          <div className='grid lg:grid-cols-5 gap-8'>
            {/*Left*/}
            <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
              <div className='lg:p-4 h-full'>
                <div>
                  <img className='rounded-xl hover:scale-105 ease-in duration-300' src='/assets/Contacts.png' alt='/' />
                </div>
                <div>
                  <h2 className='py-2'>Lee Jin Kang</h2>
                  <p>Developer & Engineer</p>
                  <p className='py-4'>Contact me for more information.</p>
                </div>
                <div>
                  <p className='uppercase pt-8'>Connect With Me</p>
                  <div className='flex items-center justify-between py-4'>
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
            {/*Right*/}
          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='py-4'>
              <form>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>NAME</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                  </div>

                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>PHONE NUMBER</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                  </div>
                </div>

                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>EMAIL</label>
                  <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" />
                </div>

                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>SUBJECT</label>
                  <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                </div>

                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>MESSAGE</label>
                  <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10'></textarea>
                </div>

                <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/#home'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
            <HiOutlineChevronDoubleUp className='text-[#504be7]' size={25}/>
            </div>
          </Link>
        </div>
        </div>
      </div>
  )
}

export default Contact