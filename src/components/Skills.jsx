import { FaCircleCheck } from "react-icons/fa6"
import { motion } from "framer-motion"

const Skills = () => {

  const frontendSkills =[
    {
      id:1,
      skill:"HTML"
    },
    {
      id:2,
      skill:"CSS"
    },
    {
      id:3,
      skill:"BootStrap"
    },
    {
      id:4,
      skill:"Tailwind"
    },
    {
      id:5,
      skill:"Javascript"
    },
    {
      id:6,
      skill:"React"
    },
    {
      id:7,
      skill:"next"
    },
    {
      id:8,
      skill:"shadcn"
    },
    {
      id:9,
      skill:"MaterialUI"
    },
  ]

  const backendSkills = [
    {
      id: 1,
      skill:"node.js"
    },
    {
      id: 2,
      skill:"Express.js"
    },
    {
      id: 3,
      skill:"mongoDB"
    },
    {
      id: 4,
      skill:"MySql"
    },
    {
      id: 4,
      skill:"Firebase"
    },{
      id: 4,
      skill:"appwrite"
    },
  ]

  return (
   <motion.section className="h-screen pt-40 flex flex-col items-center" initial={{opacity:0}} animate={{opacity: 1}} transition={{duration: 10}}>
    <p className="opacity-90 p-2">Explore My</p>
    <h1 className="font-bold text-3xl">Technical Skills</h1>
    <div className="flex items-center justify-center gap-12 mt-12">
      <div className="border border-gray-500 rounded-3xl px-20 py-16 ">
        <h1 className="font-bold opacity-70 text-xl pl-20">Frontend Development</h1>
        <hr className="border bg-gray-950 w-full my-2"/>
        <div className="mt-10 grid grid-cols-3 grid-rows-auto-fit gap-8">
        {
          frontendSkills.map((skill) =>{
            return(
              <div key={skill.id} className="font-bold flex flex-row gap-2 items-center justify-center hover:opacity-70 ">
                <FaCircleCheck/>
                <h1>{skill.skill}</h1>
              </div>
            )
          })
        }
          
        </div>
        </div>
      <div className="border border-gray-500 p-10 rounded-3xl px-20 py-16">
        <h1 className="font-bold opacity-70 text-xl pl-20">Backend Development</h1>
        <hr className="border bg-gray-950 w-full my-2"/>
        <div className="grid mt-10 gap-8 grid-cols-3 grid-rows-auto-fit">
          {
            backendSkills.map((skill) => {
              return(
                <div key={skill.id} className="font-bold flex flex-row gap-2 items-center justify-center hover:opacity-70 ">
                  <FaCircleCheck/>
                  <h1>{skill.skill}</h1>
                  </div>
              )
            })
          }
        </div>
        </div>
    </div>
   </motion.section>
  )
}

export default Skills