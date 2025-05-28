import React, { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import logo from '../assets/logoo.jpg'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="bg-black text-white py-5 flex justify-between  md:px-16 lg:px-24 relative">

      {/* Logo */}
      <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-full px-6 py-2">
        my portfolio
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        <a href="#Hero" className="hover:bg-slate-400 rounded-full px-5 py-2 cursor-pointer">Home</a>
        <a href="#aboutme" className="hover:bg-slate-400 rounded-full px-5 py-2 cursor-pointer">About Me</a>
        <a href="#service" className="hover:bg-slate-400 rounded-full px-5 py-2 cursor-pointer">Skills</a>
        <a href="#project" className="hover:bg-slate-400 rounded-full px-5 py-2 cursor-pointer">Projects</a>
        <a href="#contact" className="hover:bg-slate-400 rounded-full px-5 py-2 cursor-pointer">Contacts</a>
        <a href="mailto:savithirysenthil@gmail.com" className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-full  cursor-pointer px-6 py-2 hover:scale-110">
          connect
        </a>
      </div>

      {/* Hamburger Icon - shows on mobile */}
      <div
        className="md:hidden cursor-pointer "
        onClick={toggleMenu}
      >
        {menuOpen ? (
          <HiX className="w-7 h-7 text-white" />
        ) : (
          <HiMenuAlt3 className="w-7 h-7 text-white" />
        )}
      </div>

      {/* Mobile Menu - shows only when menuOpen is true */}
      {menuOpen && (
        <div className="absolute top-full right-0 mt-2 bg-black rounded-xl shadow-lg p-5 flex flex-col space-y-3 md:hidden w-[70%] max-w-[250px] z-10">
          <a href="#" className="hover:bg-slate-400 rounded-full px-5 py-2 cursor-pointer">Home</a>
          <a href="#" className="hover:bg-slate-400 rounded-full px-5 py-2 cursor-pointer">About Me</a>
          <a href="#" className="hover:bg-slate-400 rounded-full px-5 py-2 cursor-pointer">Skills</a>
          <a href="#" className="hover:bg-slate-400 rounded-full px-5 py-2 cursor-pointer">Projects</a>
          <a href="#" className="hover:bg-slate-400 rounded-full px-5 py-2 cursor-pointer">Contacts</a>
          <button className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-full px-6 py-2 hover:scale-110">
            connect
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
