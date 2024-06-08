import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6';
import img from '../assets/undraw_Agreement_re_d4dv.png';
import { motion } from 'framer-motion';

const Contact = () => {
  const adminEmail = 'shubhamdhobale1945@gmail.com';

  return (
    <motion.div id='contact' className="pt-28 px-4 md:px-8 lg:px-16 flex flex-col justify-center items-center w-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 10 }}>
      <p className="p-1 opacity-90">Get in Touch</p>
      <h1 className="text-3xl md:text-5xl font-bold">Contact Me</h1>
      <div className='flex flex-row pt-6 md:flex-row justify-center items-center gap-8 w-full'>
        <div className='w-2/4 md:w-1/2'>
          <img src={img} alt="" className='mb-8 w-full' />
        </div>
        <div className='w-2/4 md:w-1/2'>
          <form action="" className='flex flex-col gap-6'>
            <input type="text" className='border border-black p-4 rounded-xl' placeholder='Name' />
            <textarea name='message' rows={3} className='border border-black p-4 rounded-xl' placeholder='Message'></textarea>
            <button type='Submit' className='bg-gray-500 p-2 rounded-xl font-bold text-sm text-white'>Submit</button>
          </form>
          <div className='flex justify-center gap-6 mt-4'>
            <a href="https://www.linkedin.com/in/shubham-dhobale-114083255/" target='_blank'><FaLinkedin size={25} className='hover:text-gray-500 transition-all duration-500' /></a>
            <a href="https://github.com/shubhamdhobale" target='_blank'><FaGithub size={25} className='hover:text-gray-500 transition-all duration-500' /></a>
            <a href="https://www.instagram.com/_shubham.dhobale?igsh=NWhmbzJvbm92enU5" target='_blank'><FaInstagram size={25} className='hover:text-gray-500 transition-all duration-500' /></a>
            <a href={`mailto:${adminEmail}`}><FaEnvelope size={25} className='hover:text-gray-500 transition-all duration-500' /></a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
