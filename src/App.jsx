import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Service from './components/Service'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      
       
        <div className='bg-black min-h-screen' >
        <Navbar/>
        <Hero/>
        <About/>
        <Service/>
        <Projects/>
        <Contact/>
        <Footer/>
        </div>
       
       
      
       
      
       
    </div>
  )
}

export default App
