import React from 'react'
import aboutimag from '../assets/aboutt.png'
import {motion} from 'framer-motion'

const About = () => {
  return (
    <motion.div 
     initial={{ opacity: 0, scale:0 }}
      whileInView={{ opacity: 1, scale:1 }}
      transition={{ duration: 1}}
      className='bg-black text-white py-20' id='aboutme'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl text-center font-bold mb-12'>ABOUT ME</h2>
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
        <img src={aboutimag} alt=" " className='w-72 h-80 rouned object-cover mb-8 md:mb-0'/>
        <div className='flex-1'>
        <p className='text-lg mb-8'>
          I’m Kishhore S, a passionate B.Tech Information Technology student currently in my second year at Puducherry Technological University. I have a strong interest in Full Stack Web Development, and I’m skilled in building modern, responsive websites. Alongside web development, I actively explore AI tools, Generative AI, and Data Science, constantly learning and experimenting with real-world applications. I enjoy turning ideas into impactful digital solutions and continuously strive to grow as a versatile tech professional.
        </p>
        <div className='space-y-4'>
          <div className='flex-items-center'>
            <label htmlFor='htmlandcss' classname="w-2/12">html and css</label>
            <div className='grow bg-gray-800 rounded-full h-2.5'>
              <div className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12'>

              </div>
          </div>
          </div>
          <div className='flex-items-center'>
            <label htmlFor='htmlandcss' classname="w-2/12">react js</label>
            <div className='grow bg-gray-800 rounded-full h-2.5'>
              <div className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12'>

              </div>
          </div>
          </div>
          <div className='flex-items-center'>
            <label htmlFor='htmlandcss' classname="w-2/12">node js and springboot</label>
            <div className='grow bg-gray-800 rounded-full h-2.5'>
              <div className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12'>

              </div>
          </div>
          </div>
          <div className='flex-items-center'>
            <label htmlFor='htmlandcss' classname="w-2/12">sql and monogdb</label>
            <div className='grow bg-gray-800 rounded-full h-2.5'>
              <div className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12'>

              </div>
          </div>
          </div>
          <div className='mt-12 flex justify-between text-center '>
            <div>
              <h3 className='text-2xl font-bold text-transpart bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% '>
                  10+
              </h3>
              <p>
                projects completed
              </p>
            </div>
          </div>

        </div>
        </div>
        </div>

      </div>
      
    </motion.div>
  )
}

export default About
