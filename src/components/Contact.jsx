import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6'
import img from '../assets/undraw_Agreement_re_d4dv.png'

const Contact = () => {
  return (
    <div id='contact' className="h-screen pt-40 flex flex-col items-center">
      <p className="p-1 opacity-90">Get in Touch</p>
      <h1 className="text-5xl font-bold">Contact Me</h1>
      <div className='flex flex-row justify-center items-center  w-3/4'>
      <div className='w-2/4'>
        <img src={img} alt="" className='mb-8'/>
      </div>
      <div className='w-2/4'>
      <form action="" className='flex flex-col gap-6'>
      <input type="text" className='border border-black p-4 rounded-xl' placeholder='Name' />
      {/* <input type="email" className='border border-black p-4 rounded-xl' placeholder='email' />
      <input type="number" className='border border-black p-4 rounded-xl' placeholder='Contact' /> */}
      <textarea name='message' rows={3} cols={60} className='border border-black p-4 rounded-xl' placeholder='Message'/>
      <button type='Submit' className='bg-gray-500 p-2 rounded-xl font-bold text-sm text-white'>Submit</button>
      <div className='flex justify-center gap-6'>
        <a href="https://www.linkedin.com/in/shubham-dhobale-114083255/" target='_blank'><FaLinkedin size={25} className='hover:text-gray-500 transition-all duration-500' /></a>
        <a href="https://github.com/shubhamdhobale" target='_blank'><FaGithub size={25} className='hover:text-gray-500 transition-all duration-500'/></a>      
        <a href="https://www.instagram.com/_shubham.dhobale?igsh=NWhmbzJvbm92enU5" target='_blank'><FaInstagram size={25} className='hover:text-gray-500 transition-all duration-500'/></a>
        <a href=""><FaEnvelope size={25} className='hover:text-gray-500 transition-all duration-500'/></a>      
        </div>
      </form>  
      </div>  
      </div>    
    </div>
  )
} 

export default Contact