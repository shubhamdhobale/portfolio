import logo from '../assets/IMG20240601183500.jpg';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from 'framer-motion';
import '../App.css'

const Home = () => {
  return (
    <motion.section id='home' className="pt-40 h-screen mt-20" initial={{opacity:0}} animate={{opacity: 1}} transition={{duration: 3}}>
      <div className="container mx-auto flex justify-center items-center gap-20">
        <div>
          <div className="w-64 h-64 border rounded-full drop-shadow-2xl">
            <img src={logo} alt="" className='rounded-full drop-shadow-2xl hover:opacity-90 hover:scale-150 transition-all duration-1000' />
          </div>
        </div>
        <div className="flex gap-4 flex-col">
          <p className="font-bold opacity-50 ">Hello I&apos;m</p>
          <h1 className="font-bold text-4xl">Shubham Dhobale</h1>
          <h4 className="font-bold text-2xl opacity-50">Full Stack Developer</h4>
          <div className="flex gap-4">
            <button className="buttonDownload w-40 border border-black rounded-3xl p-4 text-sm font-bold hover:bg-gray-700 hover:text-white transition-all duration-700 pl-8 "><a href="../assets/Shubham dhobale (1).pdf"  download='Shubham dhobale.pdf' >Download CV </a></button>
            <a href="#contact"><button className="  border border-black rounded-3xl p-4 text-sm font-bold text-white bg-gray-700 hover:bg-gray-600">Contact Info</button></a>
          </div>
          <div className="flex justify-center items-center gap-4 mr-10">
            <a href="https://www.linkedin.com/in/shubham-dhobale-114083255/" target='_blank'>
              <FaLinkedin size={22} className='cursor-pointer hover:text-gray-500' />
            </a>
            <a href="https://github.com/shubhamdhobale" target='_blank'>
              <FaGithub size={22} className='cursor-pointer hover:text-gray-500' />
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Home;
