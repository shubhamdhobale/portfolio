import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Sidcup Family Golf",
      description: "Experience the Sidcup Family Golf website clone, crafted with HTML, CSS, and JavaScript, featuring dynamic GSAP animations for an engaging user experience.",
      img: "/images/golfwebsiteclone.png",
      githubLink: "https://github.com/shubhamdhobale/Golf-website-clone.git",
      demolink: "https://astonishing-seahorse-7651a5.netlify.app/"
    },
    {
      id: 2,
      title: "Portfolio",
      description: "Discover my MERN stack portfolio website, elevated with Framer Motion animations, showcasing projects, skills, and achievements in an immersive experience.",
      img: "/images/portfolio.png",
      githubLink: "https://github.com/shubhamdhobale/portfolio.git",
      demolink: "https://shubhamdhobale.netlify.app/"
    },
    {
      id: 3,
      title: "megaBlogs",
      description: "Explore a dynamic MERN stack blogging platform powered by Appwrite, enabling seamless hosting, reading, and storage of your captivating blogs.",
      img: "",
      githubLink: "https://github.com/shubhamdhobale/mega-blogs.git",
      demolink: ""
    },
    { id: 4, title: "Project 4", description: "Description of project 4", img: "/images/airmax.png" },
    { id: 5, title: "Project 5", description: "Description of project 5", img: "" }
  ];

  return (
    <motion.div id="projects" className="pt-10 px-4 ml-1/4 md:px-8 lg:px-16 flex flex-col justify-center items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 10 }}>
      <p className="p-1 opacity-90">Browse My Recent</p>
      <h1 className="text-3xl md:text-5xl font-bold">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10 ">
        {projects.map((project) => (
          <div key={project.id} className="w-full border border-black rounded-3xl flex flex-col gap-4 p-8 items-center justify-center">
            <h1 className="font-bold text-2xl md:text-4xl p-2">{project.title}</h1>
            <img src={project.img} alt="img" className="rounded-3xl bg-cover w-full h-48 md:h-60 hover:opacity-80 hover:scale-105 transition-all duration-500" />
            <p className="text-sm md:text-base px-2">{project.description}</p>
            <div className="flex items-center justify-center gap-4 mt-4">
              <a href={project.githubLink} target="_blank" className="border rounded-3xl px-4 py-2 border-black hover:text-white hover:bg-gray-600 transition-all duration-500">Github</a>
              <a href={project.demolink} target="_blank" className="border rounded-3xl px-4 py-2 border-black hover:text-white hover:bg-gray-600 transition-all duration-500">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
