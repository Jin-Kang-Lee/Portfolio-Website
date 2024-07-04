import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import StockImg from '../public/assets/projects/Stock.png'
import SpeechRecogImg from '../public/assets/projects/Speech_Recog_Pic.png'
import CryptoImg from '../public/assets/projects/Crypto_WebAPI_Pic.png'
import CloneImg from '../public/assets/projects/ChatGPT-Clone_Pic.png'
import BitcoinImg from '../public/assets/projects/Bitcoin_Pic1.png'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-24'>
        <p className='text-xl tracking-widest uppercase text-[#504be7] dark:text-[#FF2E63]'>
          Projects
        </p>
        <h2 className='py-4 '>What I've Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          
          <ProjectItem 
          title='Real Time Speech Recognition' 
          backgroundImg={SpeechRecogImg} 
          projectURL='https://github.com/Jin-Kang-Lee/Real-Time-Speech-Recognition'
          build='Python'/>
          
          <ProjectItem 
          title='Bitcoin Price Prediction ML Model' 
          backgroundImg={BitcoinImg} 
          projectURL='https://github.com/Jin-Kang-Lee/Bitcoin_Price_Prediction'
          build='Python, Machine Learning'/>

          <ProjectItem 
          title='Stock Price Prediction ML Model' 
          backgroundImg={StockImg} 
          projectURL='https://github.com/Jin-Kang-Lee/Stock_Prediction_Model'
          build='Python, Machine Learning'/>
          
          <ProjectItem 
          title='ChatGPT Clone' 
          backgroundImg={CloneImg} 
          projectURL='https://github.com/Jin-Kang-Lee/ChatGPT_Clone'
          build='Python'/>
        </div>
      </div>
    </div>
    
  )
}

export default Projects