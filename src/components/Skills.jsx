import { FaCircleCheck } from "react-icons/fa6"

const Skills = () => {
  return (
   <section className="h-screen pt-40">
    <p className="opacity-90 p-2">Explore My</p>
    <h1 className="font-bold text-3xl">Technical Skills</h1>
    <div className="flex items-center justify-center gap-12 mt-12">
      <div className="border border-gray-500 rounded-3xl px-20 py-16 ">
        <h1 className="font-bold opacity-70 text-xl">Frontend Development</h1>
        <div className="mt-10 grid grid-cols-3 grid-rows-3 gap-8">
          <div className="font-bold flex flex-row gap-2 items-center justify-center hover:opacity-70 ">
            <FaCircleCheck/>
            <h1>HTML</h1>
          </div>
          <div className="font-bold flex flex-row gap-2 items-center justify-center hover:opacity-70 ">
            <FaCircleCheck/>
            <h1>CSS</h1>
          </div>
          <div className="font-bold flex flex-row gap-2 items-center justify-center hover:opacity-70 ">
            <FaCircleCheck/>
            <h1>BootStrap</h1>
          </div>
          <div className="font-bold flex flex-row gap-2 items-center justify-center hover:opacity-70 ">
            <FaCircleCheck/>
            <h1>Tailwind</h1>
          </div>
          <div className="font-bold flex flex-row gap-2 items-center justify-center hover:opacity-70 ">
            <FaCircleCheck/>
            <h1>Shadcn</h1>
          </div>
          <div className="font-bold flex flex-row gap-2 items-center justify-center hover:opacity-70 ">
            <FaCircleCheck/>
            <h1>React</h1>
          </div>
          <div className="font-bold flex flex-row gap-2 items-center justify-center hover:opacity-70 ">
            <FaCircleCheck/>
            <h1>JavaScript</h1>
          </div>
          <div className="font-bold flex flex-row gap-2 items-center justify-center hover:opacity-70 ">
            <FaCircleCheck/>
            <h1>Next</h1>
          </div>
          <div className="font-bold flex flex-row gap-2 items-center justify-center hover:opacity-70 ">
            <FaCircleCheck/>
            <h1>Figma</h1>
          </div>
        </div>
        </div>
      <div className="border border-gray-500 p-10 rounded-3xl px-20 py-16">
        <h1 className="font-bold opacity-70 text-xl">Backend Development</h1>
        <div className="grid mt-10 gap-8 grid-cols-2 grid-rows-3">
        <div className="font-bold flex flex-row gap-2 items-center justify-center hover:opacity-70 ">
            <FaCircleCheck/>
            <h1>Node.js</h1>
          </div>
          <div className="font-bold flex flex-row gap-2 items-center justify-center hover:opacity-70 ">
            <FaCircleCheck/>
            <h1>Express.js</h1>
          </div>
          <div className="font-bold flex flex-row gap-2 items-center justify-center hover:opacity-70 ">
            <FaCircleCheck/>
            <h1>Firebase</h1>
          </div>
          <div className="font-bold flex flex-row gap-2 items-center justify-center hover:opacity-70 ">
            <FaCircleCheck/>
            <h1>appwrite</h1>
          </div>
          <div className="font-bold flex flex-row gap-2 items-center justify-center hover:opacity-70 ">
            <FaCircleCheck/>
            <h1>MongoDb</h1>
          </div>
          <div className="font-bold flex flex-row gap-2 items-center justify-center hover:opacity-70 ">
            <FaCircleCheck/>
            <h1>MySQL</h1>
          </div>
        </div>
        </div>
    </div>
   </section>
  )
}

export default Skills