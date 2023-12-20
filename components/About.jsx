import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2 '>
                <p className='uppercase text-xl tracking-widest text-[#504be7]'>About</p>
                <h2 className='py-4'>Who Am I</h2>
                <p className='py-2 text-gray-600'>I have always had a knack for technology and working with computers. 
                  My journey in the tech world has been a thrilling exploration of various domains, 
                  ranging from Cloud Computing to Machine Learning. 
                  This curiosity has driven me to delve into hands-on projects and immerse myself in the ever-evolving landscape of technology.
                  I've developed side projects during my free time, transforming ideas into tangible solutions. 
                  These projects have not only honed my technical skills but also fueled my passion for innovation and problem-solving. 
                  Alongside my practical experience, I've dedicated myself to continuous learning, earning industry certifications that ensure I stay at the forefront of emerging trends.</p>

                  <a href='https://github.com/Jin-Kang-Lee?tab=repositories'>
                    <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects</p>
                  </a>
                  
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
              <img className='rounded-xl' src="/assets/AboutMe1.png" alt="/" width={700} height={450}/>
            </div>
        </div>
    </div>
  )
}

export default About