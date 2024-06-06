import { FaMedal, FaPeopleGroup } from "react-icons/fa6"
import logo from '../assets/IMG20240601183951 (1).jpg'

const About = () => {
  return (
    <section className="top-60 relative h-screen mt-40">
      <p className="text-md">Get to know more</p>
      <h1 className="text-5xl font-bold">About Me</h1>
      <div className="flex flex-row justify-center items-center gap-8 mt-12">
        <div className="w-96 h-72 drop-shadow-2xl">
          <img src={logo} alt="" className="w-96 rounded drop-shadow-2xl hover:opacity-80 hover:scale-105 transition-all duration-300 "/>
        </div>
        <div className="flex flex-col gap-4 w-1/2"> 
          <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium harum amet necessitatibus? Eligendi quibusdam placeat vel animi natus quia dolor debitis recusandae consectetur repellendus, voluptate enim numquam fugit. Corrupti voluptates culpa, quod voluptatibus perferendis soluta! Repellat nisi nam iusto sit!</p>
          <div className="flex flex-row gap-10 items-center justify-center mt-8">
            <div className=" border border-black rounded-3xl flex flex-col justify-center items-center gap-2 p-4 hover:text-blue-700 hover:underline transition-all duration-300">
              <FaMedal/>
              <h1 className="font-bold">Experiance & Certifications</h1>
            </div>
            <div className="w-60 h-2/4 border border-black rounded-3xl flex flex-col justify-center items-center gap-2 p-4 hover:text-blue-700 hover:underline  transition-all duration-300">
              <FaPeopleGroup/>
              <h1 className="font-bold">Education</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About