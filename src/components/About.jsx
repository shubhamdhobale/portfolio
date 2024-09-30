import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaDiamond, FaMedal, FaPeopleGroup } from "react-icons/fa6";
import logo from '../assets/IMG20240601183951 (1).jpg';
import { useState } from "react";
import '../App.css';

const About = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const togglePopup1 = () => {
    setIsOpen1(!isOpen1);
  };
  const togglePopup2 = () => {
    setIsOpen2(!isOpen2);
  };

  

  const EducationalInfo = [
    {
      id: 1,
      college: "Marathwada Mitra Mandal’s College of Engineering, Karvenagar",
      course: "Bachelor’s in Information Technology (2025)",
      percentage: "SGPA :- FE: 8.20 | SE: 7.09 | TE - 8.81"
    },
    {
      id: 2,
      college: "Mahatma Gandhi Junior college, Manchar",
      course: "HSC (2021)",
      percentage: "percentage - 89%"
    },
    {
      id: 3,
      college: "Vidhya Vikas Mandir, Awasari BK ||",
      course: "SSC (2019)",
      percentage: "percentage - 92%"
    }
  ];

  const internships = [
    {
      id: 1,
      position: "Full Stack Intern",
      CompanyName: "- Infotrixs Pvt. Ltd.",
      duration: "- 1.5 month",
      technology: "- MERN Stack",
      logo: "https://th.bing.com/th/id/OIP.qigu0dHkDGu6d48zJ3_lMwHaHE?w=176&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      certificate: "https://drive.google.com/file/d/1T5o33H5W2uxsvzRlktuYPiI7sg1bBFjF/view?usp=drive_link"
    }
  ];

  const certifications = [
    {
      id: 1,
      certificateName: "MERN Stack Developer",
      issuedby: " - Coding Ninjas"
    }
  ];

  const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: true });
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true });

  return (
    <motion.section
      id="about"
      className="min-h-screen pt-24 px-4 flex flex-col items-center ml-2 w-full"
      ref={imageRef}
      initial={{ opacity: 0 , x:-100}}
      animate={imageInView ? { opacity: 1, x:0 } :{}}
      transition={{ duration: 2 }}
    >
      <p className="text-md tracking-wider">Get to know more</p>
      <h1 className="text-3xl md:text-5xl font-bold text-center tracking-wider">About Me</h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-4 w-full md:w-4/5">
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, x: -200 }}
          animate={imageInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 2 }}
          className="w-96 md:w-1/2 md:h-96 drop-shadow-2xl"
        >
          <img
            src={logo}
            alt=""
            className="w-full h-full object-cover rounded drop-shadow-2xl hover:opacity-80 hover:scale-105 transition-all duration-700"
          />
        </motion.div>
        <motion.div
          ref={textRef}
          initial={{ opacity: 0, x: 100 }}
          animate={textInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className="flex flex-col gap-4 md:w-1/2 pt-8 md:pt-16 justify-center items-center w-96"
        >
          <p className="opacity-85 leading-7 tracking-wider text-center md:w-full ">
            Greetings! I&apos;m <span className="text-red-500">Shubham Santosh Dhobale</span>, a tech enthusiast originally from Manchar, Pune. Armed with a solid educational background in <span className="text-red-500">BE in Information Technology</span>, I&apos;ve embarked on a dynamic journey through the tech landscape. Over the years, I&apos;ve immersed myself in various roles and projects, acquiring invaluable experience and refining my skills. My expertise spans <span className="text-red-500">full stack development</span>, backed by certifications in <span className="text-red-500">MERN Stack</span>. Utilizing my knowledge and expertise to contribute meaningfully to the ever-evolving tech industry.
          </p>
          <div className="flex flex-row md:flex-row gap-4 items-center justify-center mt-8 w-full md:w-96">
            <div
              className="shadow-2xl rounded-3xl flex flex-col justify-center items-center gap-2 p-4 hover:text-blue-700 hover:underline transition-all duration-700 h-1/2 w-1/2 md:w-full"
              onClick={togglePopup1}
            >
              <FaMedal />
              <h1 className="font-bold text-center text-sm md:text-base tracking-normal">Experience & Certifications</h1>
              {isOpen1 && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
                  <div className="bg-white rounded-lg p-8 max-w-md z-50 overflow-auto max-h-full">
                    <motion.div
                      className="w-full flex flex-col gap-8"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 2 }}
                    >
                      <div>
                        <h1 className="text-2xl font-bold">Internships</h1>
                        <hr className="border border-blue-700 w-full my-2" />
                        {internships.map((internship) => (
                          <div key={internship.id} className="flex flex-row md:flex-row gap-4 items-center">
                            <img src={internship.logo} alt="company logo" className="w-16 h-16" />
                            <div>
                              <h1 className="text-lg font-bold">{internship.position}</h1>
                              <p>{internship.CompanyName}</p>
                              <p>{internship.duration}</p>
                              <p>{internship.technology}</p>
                              <a href={internship.certificate} className="underline" target="_blank" rel="noopener noreferrer">
                                certificate
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-col">
                        <h1 className="text-2xl font-bold">Certifications</h1>
                        <hr className="border border-blue-700 w-full my-2" />
                        {certifications.map((certificate) => (
                          <div key={certificate.id}>
                            <h1 className="font-bold">{certificate.certificateName}</h1>
                            <p className="left-4 relative">{certificate.issuedby}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                    <button
                      onClick={togglePopup1}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 mt-4 drop-shadow-2xl relative px-4 rounded"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div
              className="shadow-2xl rounded-3xl flex flex-col justify-center items-center gap-2 p-4 hover:text-blue-700 hover:underline transition-all duration-700 h-1/2 w-1/2"
              onClick={togglePopup2}
            >
              <FaPeopleGroup />
              <h1 className="font-bold text-center text-sm md:text-base tracking-wider">Education</h1>
              {isOpen2 && (
                <div className="fixed inset-0 z-50 flex items-center justify-center fadeIn">
                  <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
                  <div className="bg-white rounded-lg p-8 max-w-md z-50 overflow-auto max-h-full">
                    <h2 className="text-2xl font-bold mb-4 fadeIn">Educational Background</h2>
                    <hr className="border border-blue-700 w-full my-4" />
                    <motion.div
                      className="flex gap-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 2 }}
                    >
                      <div className="flex flex-col gap-12 mt-4">
                        <FaDiamond />
                        <FaDiamond />
                        <FaDiamond />
                      </div>
                      <div className="flex flex-col gap-4 justify-center">
                        {EducationalInfo.map((Education) => (
                          <div key={Education.id} className="flex flex-col">
                            <h1 className="text-lg font-bold">{Education.course}</h1>
                            <p>{Education.college}</p>
                            <p>{Education.percentage}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                    <button
                      onClick={togglePopup2}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 mt-4 left-1/2 transform -translate-x-1/2 drop-shadow-2xl relative px-4 rounded"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
