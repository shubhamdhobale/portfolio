import logo from '../assets/IMG20240601183500.jpg'
import { FaGithub, FaLinkedin } from "react-icons/fa6";


const Home = () => {
  return (
    <section className="mt-60">
    <div className="container mx-auto flex justify-center items-center gap-20">
      <div>
        <div className="w-60 h-60 border rounded-full">
          <img src={logo} alt="" className='rounded-full bg-gradient-to-bl	'/>
        </div>
      </div>
      <div className="flex gap-4 flex-col">
        <p className="font-bold opacity-50 ">Hello I&apos;m</p>
        <h1 className="font-bold text-4xl">Shubham Dhobale</h1>
        <h4 className="font-bold text-2xl opacity-50">Full Stack Developer</h4>
        <div className="flex gap-4">
          <button className="border border-black rounded-3xl p-4 text-sm font-bold hover:bg-gray-700 hover:text-white">Download CV</button>
          <button className="border border-black rounded-3xl p-4 text-sm font-bold text-white bg-gray-700 hover:bg-gray-600">Constact Info</button>
        </div>
        <div className="flex justify-center items-center gap-4 mr-10">
          <a href="https://www.linkedin.com/in/shubham-dhobale-114083255/" target='_blank'>
            <FaLinkedin size={22} className='cursor-pointer	'/>
          </a>
          <a href="https://github.com/shubhamdhobale" target='_blank'>        
            <FaGithub size={22} className='cursor-pointer	'/>
          </a>
        </div>
      </div>
    </div>
  </section>

  )
}

export default Home