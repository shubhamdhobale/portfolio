import logo from '../assets/IMG20240601183500.jpg';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from 'framer-motion';
import '../App.css';

const Home = () => {
  return (
    <motion.section 
      id='home' 
      className=" md:pt-0 h-screen flex flex-col justify-center items-center w-full" 
      initial={{opacity:0}} 
      animate={{opacity: 1}} 
      transition={{duration: 3}}
    >
      <div className="container ml-4 mt-48 flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 p-4 md:mr-10">
        <div className="flex justify-center md:justify-start ">
          <div className="w-96 h-96 md:w-96 md:h-96  border rounded-full drop-shadow-2xl">
            <img 
              src={logo} 
              alt="" 
              className='rounded-full drop-shadow-2xl hover:opacity-90 hover:scale-125 transition-all duration-1000 w-full h-full object-cover' 
            />
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start gap-4">
          <p className="font-bold opacity-50 text-center md:text-left">Hello I&apos;m</p>
          <h1 className="font-bold text-3xl md:text-4xl text-center md:text-left">Shubham Dhobale</h1>
          <h4 className="font-bold text-xl md:text-2xl opacity-50 text-center md:text-left">Full Stack Developer</h4>
          <div className="flex gap-4 flex-row md:flex-row">
            <button className="buttonDownload w-44 border border-black rounded-3xl p-4 text-sm font-bold hover:bg-gray-700 hover:text-white transition-all duration-700">
              <a href="../assets/Shubham dhobale (1).pdf" download='Shubham dhobale.pdf'>Download CV</a>
            </button>
            <a href="#contact">
              <button className="border border-black rounded-3xl p-4 text-sm font-bold text-white bg-gray-700 hover:bg-gray-600 w-40">
                Contact Info
              </button>
            </a>
          </div>
          <div className="flex justify-center md:justify-start items-center gap-4 mt-4">
            <a href="https://www.linkedin.com/in/shubham-dhobale-114083255/" target='_blank' rel="noopener noreferrer">
              <FaLinkedin size={30} className='cursor-pointer hover:text-gray-500' />
            </a>
            <a href="https://github.com/shubhamdhobale" target='_blank' rel="noopener noreferrer">
              <FaGithub size={30} className='cursor-pointer hover:text-gray-500' />
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Home;
