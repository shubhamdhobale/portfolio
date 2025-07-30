import logo from '../assets/IMG20240601183500.jpg';
import leetcode_icon from '../assets/leetcode-icon.png';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../App.css';
import codingNinja from '../../public/images/codingninja.svg';
import { FlipWords } from './Flipwords';

const Home = () => {
  const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: true });
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true });
  const words = ["Full_Stack_Developer", "Product_Designer"];


  return (
    <motion.section 
      id='home' 
      className="md:pb-12 h-screen flex flex-col justify-center items-center w-full" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 2 }}
    >
      <div className="container ml-4 mt-48 flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 p-4 md:mr-10 z-10">
        <motion.div 
          className="flex justify-center md:justify-start"
          ref={imageRef}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={imageInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ 
            duration: 1,
            delay: 0.5,
           }}
        >
          <div className="w-96 h-96 md:w-96 md:h-96 rounded-full drop-shadow-2xl ">
            <img 
              src={logo} 
              alt="" 
              className='rounded-full drop-shadow-2xl hover:opacity-90 hover:scale-125 transition-all duration-1000 w-full h-full object-cover' 
            />
          </div>
        </motion.div>
        <motion.div 
          className="flex flex-col items-center md:items-start gap-4"
          ref={textRef}
          initial={{ opacity: 0, x: 100 }}
          animate={textInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 2 }}
        >
          <p className="font-bold opacity-50 text-center md:text-left tracking-wider">Hello I&apos;m</p>
          <h1 className="font-bold text-3xl md:text-4xl text-center md:text-left tracking-wider">Shubham Dhobale</h1>
          <h4 className="font-bold text-xl md:text-2xl opacity-50 text-center md:text-left ">
              <FlipWords words={words}/>
          </h4>
          <div className="flex gap-4 flex-row md:flex-row">
            <button className="buttonDownload w-44 shadow-2xl border border-neutral-200 rounded-3xl p-4 text-sm font-bold hover:bg-gray-700 hover:text-white transition-all duration-700 tracking-wider">
              <a href="/Shubham%20dhobale.pdf" download="Shubham_dhobale.pdf">Download CV</a>
            </button>
            <a href="#contact">
              <button className="border shadow-xl  border-black rounded-3xl p-4 text-sm font-bold text-white bg-gray-700 hover:bg-gray-600 w-40 tracking-wider">
                Contact Info
              </button>
            </a>
          </div>
          <div className="flex justify-center md:justify-start items-center gap-4 mt-4 ml-20">
            <a href="https://www.linkedin.com/in/shubham-dhobale-114083255/" target='_blank' rel="noopener noreferrer">
              <FaLinkedin size={30} className='cursor-pointer hover:text-gray-500 relative bottom-2' />
            </a>
            <a href="https://github.com/shubhamdhobale" target='_blank' rel="noopener noreferrer">
              <FaGithub size={30} className='cursor-pointer hover:text-gray-500 relative bottom-2' />
            </a>
            <a href="https://leetcode.com/u/shubhamdhobale/" target='_blank' rel="noopener noreferrer">
              <img src={leetcode_icon} className='cursor-pointer hover:opacity-60 h-6 relative bottom-2' />
            </a>
            <a href="https://www.naukri.com/code360/profile/shubham2312" target='_blank'>
              <img src={codingNinja} alt="" className='cursor-pointer hover:opacity-60 h-8 absolute 
               opacity-90'/>
              <div className='h-12 w-28 relative left-8 bg-white'></div>
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Home;
