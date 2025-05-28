import React from 'react';
import heroimag from '../assets/heroimag.jpg';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale:0 }}
      whileInView={{ opacity: 1, scale:1 }}
      transition={{ duration: 1}}
      className="bg-black text-white text-center py-16 z-0"
      id="Hero"
    >
      <img
        src={heroimag}
        alt="Hero"
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-4xl font-extrabold">
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">
          KISHHORE S
        </span>{" "}
        FULL STACK DEVELOPER
      </h1>
      <p className="mt-4 text-lg text-gray-300">
        I specialize in building modern web applications, AI and LLM models, data analysis.
      </p>
      <div className="mt-4 space-x-6">
        <a
          href="mailto:savithirysenthil@gmail.com"
          className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 rounded-full px-6 py-2 hover:scale-110 inline-block"
        >
          Contact Me
        </a>
        <a
          href="/kishhore_resume.pdf"
          download
          className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 rounded-full px-6 py-2 hover:scale-110 inline-block"
        >
          Resume
        </a>
      </div>
    </motion.div>
  );
};

export default Hero;
