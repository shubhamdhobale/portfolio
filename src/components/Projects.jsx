
const projects = [
  {id:1 , title:"Project 1" , description:"Description of project 1", },
  {id:2 , title:"Project 2" , description:"Description of project 2", },
  {id:3 , title:"Project 3" , description:"Description of project 3", },
  {id:4 , title:"Project 4" , description:"Description of project 4", },
  {id:5 , title:"Project 5" , description:"Description of project 5", }

]
const Projects = () => {
  return (
    <div id="projects" className="h-screen pt-40 flex flex-col items-center">
      <p className="p-1 opacity-90">Browse My Recent</p>
      <h1 className="text-5xl font-bold">Projects</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10'>

      {
        projects.map((project) => {
          return(<div key={project.id} className="w-96 h-auto p-6 border border-black rounded-3xl flex flex-col gap-2 items-center justify-center">
            <h1 className="font-bold text-4xl p-2">{project.title}</h1>
            <img src={project.photo} alt="" className='rounded-3xl bg-cover w-68 hover:opacity-80 hover:scale-105 transition-all duration-500'/>
            <p>{project.description}</p>
            <div className='flex items-center justify-center gap-4 '>
            <button className='border rounded-3xl px-4 py-2 border-black hover:text-white hover:bg-gray-600 transition-all duration-500'>Github</button>
            <button className='border rounded-3xl px-4 py-2 border-black hover:text-white hover:bg-gray-600 transition-all duration-500'>Live Demo</button>
          </div>
          </div>)
        })
      }


      </div>
    </div>
  )
}

export default Projects