import { FaCircleCheck } from "react-icons/fa6";
import { motion } from "framer-motion";

const Skills = () => {
  const frontendSkills = [
    { id: 1, skill: "HTML" },
    { id: 2, skill: "CSS" },
    { id: 3, skill: "BootStrap" },
    { id: 4, skill: "Tailwind" },
    { id: 5, skill: "Javascript" },
    { id: 6, skill: "React" },
    { id: 7, skill: "next" },
    { id: 8, skill: "shadcn" },
    { id: 9, skill: "MaterialUI" },
  ];

  const backendSkills = [
    { id: 1, skill: "node.js" },
    { id: 2, skill: "Express.js" },
    { id: 3, skill: "mongoDB" },
    { id: 4, skill: "MySql" },
    { id: 5, skill: "Firebase" },
    { id: 6, skill: "appwrite" },
  ];

  return (
    <motion.section className="min-h-screen pt-20 px-4 flex flex-col items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 10 }}>
      <p className="opacity-90 p-2">Explore My</p>
      <h1 className="font-bold text-3xl text-center">Technical Skills</h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12 w-full max-w-4xl">
        <div className="border border-gray-500 rounded-3xl px-8 py-8 md:p-16 w-full">
          <h1 className="font-bold opacity-70 text-xl mb-4 md:pl-4">Frontend Development</h1>
          <hr className="border bg-gray-950 w-full my-2" />
          <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-auto-fit gap-4 md:gap-8">
            {frontendSkills.map((skill) => (
              <div key={skill.id} className="font-bold flex flex-row gap-2 items-center justify-center hover:opacity-70">
                <FaCircleCheck />
                <h1>{skill.skill}</h1>
              </div>
            ))}
          </div>
        </div>
        <div className="border border-gray-500 rounded-3xl px-8 py-8 md:p-16 w-full mt-8 md:mt-0">
          <h1 className="font-bold opacity-70 text-xl mb-4 md:pl-4">Backend Development</h1>
          <hr className="border bg-gray-950 w-full my-2" />
          <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-auto-fit gap-4 md:gap-8">
            {backendSkills.map((skill) => (
              <div key={skill.id} className="font-bold flex flex-row gap-2 items-center justify-center hover:opacity-70">
                <FaCircleCheck />
                <h1>{skill.skill}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
