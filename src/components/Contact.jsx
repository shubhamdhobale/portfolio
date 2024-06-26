import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import img from '../assets/undraw_Agreement_re_d4dv.png';
import { motion } from 'framer-motion';
import { useState } from 'react';
import axios from 'axios';
import {toast , ToastContainer} from 'react-toastify'


const Contact = () => {
  const adminEmail = 'shubhamdhobale1945@gmail.com';
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark"
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/formdata', formData);
      toast.success('response.data.message' , toastOptions);  // Show the success message
      window.location.reload();  
    } catch (error) {
      console.log("Internal error", error);
      alert('Failed to submit the form. Please try again.');  // Show error message
    }
  };

  return (
    <motion.div id='contact' className="pt-28 px-4 md:px-8 lg:px-16 flex flex-col justify-center items-center w-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 5 }}>
      <p className="p-1 opacity-90 tracking-wider">Get in Touch</p>
      <h1 className="text-3xl md:text-5xl font-bold tracking-wider">Contact Me</h1>
      <div className='flex flex-row pt-6 md:flex-row justify-center items-center gap-8 w-full'>
        <div className='w-2/4 md:w-1/2'>
          <img src={img} alt="" className='mb-8 w-full' />
        </div>
        <div className='w-2/4 md:w-1/2'>
          <form onSubmit={handleSubmit} className='flex flex-col gap-6'>

            <input
              type="text"
              id='name'
              name='name'
              className='border-black border p-4 rounded-xl'
              placeholder='Name'
              value={formData.name}
              onChange={handleChange}
            />
            <textarea
              name='message'
              id='message'
              rows={3}
              className='border border-black p-4 rounded-xl'
              placeholder='Message'
              value={formData.message}
              onChange={handleChange}
            />
            <button type='submit' className='bg-gray-700 hover:bg-gray-500 transition-all duration-700 p-2 rounded-xl font-bold text-sm text-white'>Submit</button>
          </form>

          <div className='flex justify-center gap-6 mt-4'>
            <a href="https://www.linkedin.com/in/shubham-dhobale-114083255/" target='_blank' rel="noopener noreferrer"><FaLinkedin size={25} className='hover:text-gray-500 transition-all duration-500' /></a>
            <a href="https://github.com/shubhamdhobale" target='_blank' rel="noopener noreferrer"><FaGithub size={25} className='hover:text-gray-500 transition-all duration-500' /></a>
            <a href="https://www.instagram.com/_shubham.dhobale?igsh=NWhmbzJvbm92enU5" target='_blank' rel="noopener noreferrer"><FaInstagram size={25} className='hover:text-gray-500 transition-all duration-500' /></a>
            <a href={`mailto:${adminEmail}`}><FaEnvelope size={25} className='hover:text-gray-500 transition-all duration-500' /></a>
          </div>
        </div>
      </div>
      <ToastContainer />
    </motion.div>
  );
};

export default Contact;









