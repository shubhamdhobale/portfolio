import { FaCss3, FaDatabase, FaFigma, FaHtml5, FaNode, FaReact } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const frontendSkills = [
    { id: 1, skill: "HTML" },
    { id: 2, skill: "CSS" },
    { id: 3, skill: "BootStrap" },
    { id: 4, skill: "Tailwind" },
    { id: 5, skill: "Javascript" },
    { id: 6, skill: "React" },
    { id: 7, skill: "Next.js" },
    { id: 8, skill: "Shadcn" },
    { id: 9, skill: "MaterialUI" },
  ];

  const backendSkills = [
    { id: 1, skill: "Node.js" },
    { id: 2, skill: "Express.js" },
    { id: 3, skill: "MongoDB" },
    { id: 4, skill: "MySQL" },
    { id: 5, skill: "Firebase" },
    { id: 6, skill: "Appwrite" },
  ];

  const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: true });
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true });

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

  return (
    <motion.section
      id="skills"
      className="min-h-screen pt-20 px-4 flex flex-col items-center relative"
      ref={imageRef}
      initial={{ opacity: 0, x: -100 }}
      animate={imageInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 2 }}
    >
      <p className="opacity-90 p-2 tracking-wider">Explore My</p>
      <code className="font-bold text-3xl text-center tracking-widest">Technical Skills</code>
      
      <FaNode className="fill-green-500 w-20 h-20 absolute md:right-80 right-0" style={{ rotate: "10deg" }} />
      <FaFigma className="fill-gray-500 w-20 h-10 absolute md:top-60 top-44" style={{ rotate: '10deg' }} />
      <FaReact className="fill-blue-900 w-20 h-20 absolute top-40 left-0 md:left-64" style={{ rotate: '30deg' }} />
      <FaDatabase className="fill-blue-500 w-20 h-20 absolute md:right-64 md:top-96 bottom-48 right-0 " style={{ rotate: '30deg' }} />
      <FaHtml5 className="fill-red-500 w-16 h-16 absolute md:left-80 left-20 -bottom-20 md:bottom-40" style={{ rotate: "20deg" }} />
      <motion.span whileHover={{ scale: 1.5, rotate: 30 }} whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}>
        <FaCss3 className="fill-blue-500 w-16 h-16 absolute md:right-96 md:bottom-20 right-0 -bottom-16" style={{ rotate: "10deg" }} />
      </motion.span>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12 w-full max-w-4xl">
        <motion.div
          className="shadow-2xl rounded-3xl px-8 py-8 md:p-16 w-full z-10 bg-white"
          ref={textRef}
          initial={{ opacity: 0, x: -100 }}
          animate={textInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 2 }}
        >
          <h1 className="font-bold opacity-70 text-xl mb-4 tracking-wide">Frontend Technologies</h1>
          <hr className="border bg-gray-950 w-full my-2" />
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8"
            variants={container}
            initial="hidden"
            animate={textInView ? "visible" : "hidden"}
            transition={{ duration: 5 }}
          >
            {frontendSkills.map((skill) => (
              <motion.div key={skill.id} variants={item} className="font-bold flex flex-row gap-2 items-center justify-center hover:opacity-70">
                <h1 className="tracking-wider font-medium cursor-pointer">{skill.skill}</h1>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="shadow-2xl rounded-3xl px-8 py-8 md:p-16 w-full mt-8 md:mt-0 z-10 bg-white"
          ref={textRef}
          initial={{ opacity: 0, x: 200 }}
          animate={textInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2 }}
        >
          <h1 className="font-bold opacity-70 text-xl mb-4 tracking-wider">Backend Technologies</h1>
          <hr className="border bg-gray-950 w-full my-2" />
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8"
            variants={container}
            initial="hidden"
            animate={textInView ? "visible" : "hidden"}
            transition={{ duration: 5 }}
          >
            {backendSkills.map((skill) => (
              <motion.div key={skill.id} variants={item} className="font-bold flex flex-row gap-2 items-center justify-center hover:opacity-70">
                <h1 className="tracking-wider font-medium cursor-pointer">{skill.skill}</h1>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
