import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
// import img from '../assets/undraw_Agreement_re_d4dv.png';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { fireDB } from './firebase/FirebaseConfig';
import { addDoc, collection } from 'firebase/firestore';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [firebaseData, setFirebaseData] = useState({
    name: "",
    message: ""
  });
  const [loading, setLoading] = useState(false); // Loading state

  const FirebaseSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (firebaseData.name === "" || firebaseData.message === "") {
      toast.error("All fields are required"  ,{
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
        })
      return;
    }

    setLoading(true); // Set loading to true while data is being submitted

    try {
      const ref = collection(fireDB, 'feedback');
      await addDoc(ref, firebaseData);
      toast.success("Message sent successfully" , {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
        })
      setFirebaseData({ name: "", message: "" }); // Clear form after submission
    } catch (error) {
      console.log(error);
      toast.error("There was an error submitting the form. Please try again." , {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
        });
    } finally {
      setLoading(false); // End loading state
    }
    e.preventDefault();
  };

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true });

  return (
    <motion.div id='contact' className="pt-28 px-4 md:px-8 lg:px-16 flex flex-col justify-center items-center w-full"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 5 }}>
      <p className="p-1 opacity-90 tracking-wider">Get in Touch</p>
      <h1 className="text-3xl md:text-5xl font-bold tracking-wider">Contact Me</h1>
      <div className='flex flex-row pt-6 md:flex-row justify-center items-center gap-8 w-full'>
        <motion.div className='w-2/4 md:w-1/2'
          ref={textRef}
          initial={{ opacity: 0, x: -200 }}
          animate={textInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 2 }}>
          {/* <img src={img} alt="" className='mb-8 w-full' /> */}
        </motion.div>
        <div className='w-2/4 md:w-1/2'>
          <motion.form className='flex flex-col gap-6'
            ref={textRef}
            method='post'
            initial={{ opacity: 0, x: -100 }}
            animate={textInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 2 }}
            onSubmit={FirebaseSubmit} // Add the form submission handler here
          >
            <input
              type="text"
              id='name'
              name='name'
              className='border-black border p-4 rounded-xl'
              placeholder='Name'
              value={firebaseData.name}
              onChange={(e) => {
                setFirebaseData({ ...firebaseData, name: e.target.value });
              }}
            />

            <textarea
              name='message'
              id='message'
              rows={3}
              className='border border-black p-4 rounded-xl'
              placeholder='Message'
              value={firebaseData.message}
              onChange={(e) => {
                setFirebaseData({ ...firebaseData, message: e.target.value });
              }}
            />

            <button type='submit' className='bg-gray-700 hover:bg-gray-500 transition-all duration-700 p-2 rounded-xl font-bold text-sm text-white'
              disabled={loading}>{loading ? "Sending..." : "Submit"}</button>
          </motion.form>


          <motion.div
            className='flex justify-center gap-6 mt-4'
            variants={container}
            initial="hidden"
            animate={textInView ? "visible" : "hidden"}
            transition={{ duration: 5 }}
          >
            <motion.a href="https://www.linkedin.com/in/shubham-dhobale-114083255/" target='_blank' rel="noopener noreferrer" variants={item}>
              <FaLinkedin size={25} className='hover:text-gray-500 transition-all duration-500' />
            </motion.a>
            <motion.a href="https://github.com/shubhamdhobale" target='_blank' rel="noopener noreferrer" variants={item}>
              <FaGithub size={25} className='hover:text-gray-500 transition-all duration-500' />
            </motion.a>
            <motion.a href="https://www.instagram.com/_shubham.dhobale?igsh=NWhmbzJvbm92enU5" target='_blank' rel="noopener noreferrer" variants={item}>
              <FaInstagram size={25} className='hover:text-gray-500 transition-all duration-500' />
            </motion.a>
            <motion.a variants={item}>
              <FaEnvelope size={25} className='hover:text-gray-500 transition-all duration-500' />
            </motion.a>
          </motion.div>
        </div>
      </div>
      <ToastContainer />
    </motion.div>
    
  );
};

export default Contact;
