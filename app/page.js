import Image from 'next/image'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Contact from '../components/Contact'


export default function Home() {
  return (
    <div> 
      <head>
      <title>JinKang - Portfolio</title> 
      <link rel="icon" href="/favicon.ico"/>
      </head>
    <Navbar />
    <Main />
    <About />
    <Experience />
    <Projects />
    <Contact />
    </div>
  )
}
