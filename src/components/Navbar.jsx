import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="text-black w-full p-4 md:p-6 fixed top-0 left-0 border border-black shadow-lg z-50 bg-white">
      <div className="container mx-auto flex flex-row md:flex-row justify-between items-center">
        <img src={logo} alt="logo" className="w-32 md:w-44 mb-4 md:mb-0 md:ml-10" />
        <button 
          className="md:hidden text-lg p-2 border border-black rounded" 
          onClick={toggleMenu}
        >
          Menu
        </button>
        <ul className="hidden md:flex flex-row gap-4 md:space-x-4 text-lg md:text-xl opacity-75 mb-4 md:mb-0 mr-4 md:mr-20">
          <li className="hover:underline hover:text-gray-900 transition-all duration-1000">
            <a href="/home">Home</a>
          </li>
          <li className="hover:underline hover:text-gray-900 transition-all duration-1000">
            <a href="#about">About</a>
          </li>
          <li className="hover:underline hover:text-gray-900 transition-all duration-1000">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:underline hover:text-gray-900 transition-all duration-1000">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-4 text-lg opacity-75 mb-4 md:hidden p-4 border-t border-black"
          >
            <li className="hover:underline hover:text-gray-900 transition-all duration-1000">
              <a href="/home" onClick={toggleMenu}>Home</a>
            </li>
            <li className="hover:underline hover:text-gray-900 transition-all duration-1000">
              <a href="#about" onClick={toggleMenu}>About</a>
            </li>
            <li className="hover:underline hover:text-gray-900 transition-all duration-1000">
              <a href="#projects" onClick={toggleMenu}>Projects</a>
            </li>
            <li className="hover:underline hover:text-gray-900 transition-all duration-1000">
              <a href="#contact" onClick={toggleMenu}>Contact</a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
