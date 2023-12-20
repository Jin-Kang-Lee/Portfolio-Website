import React from 'react'
import Image from 'next/image'

const Experience = () => {
  return (
    <div id='experience' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#504be7]'>Experience</p>
            <h2 className='py-4'>Where have I been</h2>
            <div className=' gap-8'>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/assets/experience/pwc_logo.png' 
                            width={64} 
                            height={64} 
                            alt='/'/>
                            <p>PricewaterhouseCoopers</p>
                        </div>
                        <div className='py-4 text-gray-600'>
                            <p>Risk Assurance - Cloud Trust Internship</p>
                            <p>October 2021 - March 2022 (6 Months)</p>
                        </div>
                        <div className=' text-gray-600'>
                        <p>- Supported the team in conducting a comprehensive controls review of the client's cloud environment.</p>
                        <p>- Contributed to the development of content and materials for a cloud security webinar tailored for client engagement.</p>
                        <p>- Collaborated with the team to formulate a proposal outlining cloud advisory services for a transformative project.</p>
                        </div>
                    </div>
                </div>
                <div className='py-6'>

                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/assets/experience/china-Uni-Logo.png' 
                            width={64} 
                            height={64} 
                            alt='/'/>
                            <p>Suzhou University of Science and Technology</p>
                        </div>
                        <div className='py-4 text-gray-600'>
                            <p>Data Analyst Internship</p>
                            <p>September 2021 - October 2021 (2 Months)</p>
                        </div>
                        <div className=' text-gray-600'>
                        <p>- Collaborated with the team and professor to address the annual Data Analytics challenge proposed by professionals in the Chinese visualization industry</p>
                        <p>- Executed tasks encompassing Data Mining, Data Cleaning, Text Analysis, Data Visualization, and Storytelling</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience