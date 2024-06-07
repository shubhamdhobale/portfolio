import { motion } from "framer-motion"

const Projects = () => {

  
const projects = [
  {
    id:1 , 
    title:"Sidcup Family Golf" , 
    description:"Experience the Sidcup Family Golf website clone, crafted with HTML, CSS, and JavaScript, featuring dynamic GSAP animations for an engaging user experience.", 
    img: "https://drive.google.com/file/d/1fj4fB-LXsX1j5-tgHmF2WJgWobGeJUe2/view?usp=drive_link" , 
    githubLink: "https://github.com/shubhamdhobale/Golf-website-clone.git"
  },
  {
    id:2 , 
    title:"Portfolio" , 
    description:"Discover my MERN stack portfolio website, elevated with Framer Motion animations, showcasing projects, skills, and achievements in an immersive experience.", 
    img: "",
    githubLink:"https://github.com/shubhamdhobale/portfolio.git"
  },
  {
    id:3 , 
    title:"megaBlogs" , 
    description:"Explore a dynamic MERN stack blogging platform powered by Appwrite, enabling seamless hosting, reading, and storage of your captivating blogs.", 
    img: "",
    githubLink: "https://github.com/shubhamdhobale/mega-blogs.git"
  },
  {id:4 , title:"Project 4" , description:"Description of project 4", img: ""},
  {id:5 , title:"Project 5" , description:"Description of project 5", img: ""}
]


  return (
    <motion.div id="projects" className="h-auto pt-40 flex flex-col items-center" initial={{opacity:0}} animate={{opacity: 1}} transition={{duration: 10}}>
      <p className="p-1 opacity-90">Browse My Recent</p>
      <h1 className="text-5xl font-bold">Projects</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10'>

      {
        projects.map((project) => {
          return(<div key={project.id} className="w-96 h-auto p-6 border border-black rounded-3xl flex flex-col gap-2 items-center justify-center">
            <h1 className="font-bold text-4xl p-2">{project.title}</h1>
            <img src={project.img} alt="img" className='rounded-3xl bg-cover w-68 hover:opacity-80 hover:scale-105 transition-all duration-500'/>
            <p>{project.description}</p>
            <div className='flex items-center justify-center gap-4 '>
            <a href={project.githubLink} target="_blank" className='border rounded-3xl px-4 py-2 border-black hover:text-white hover:bg-gray-600 transition-all duration-500'>Github</a>
            <button className='border rounded-3xl px-4 py-2 border-black hover:text-white hover:bg-gray-600 transition-all duration-500'>Live Demo</button>
          </div>
          </div>)
        })
      }


      </div>
    </motion.div>
  )
}

export default Projects