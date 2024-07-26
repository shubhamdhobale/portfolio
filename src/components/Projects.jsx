import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
// import {useState} from 'react';


const Projects = () => {

  // const [selectedId, setSelectedId] = useState(null)

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
      img: "https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/6650c8189cd55eb06920c00a_663ce8e4803bbe3360d137a1_3D.jpeg",
      githubLink: "https://github.com/shubhamdhobale/mega-blogs.git",
      demolink: "https://mega-blogs-omega.vercel.app/"
    },
    { id: 4, 
      title: "Grocery-shop", 
      description: "Welcome to our online grocery shop! Built with just HTML, CSS, and JavaScript. Browse through a wide selection of fresh produce, pantry staples, and household essentials. Enjoy easy navigation, responsive design, and secure checkout. Your convenience is our priority!", 
      img: "/images/groceryshop.png",
      githubLink: "https://github.com/shubhamdhobale/grocery-shop.git",
    },
    { 
      id: 5, 
      title: "Natura Farm", 
      description: "Introducing Natura Farm, your gateway to organic farming! Our website, built using React and enhanced with Framer Motion, offers an engaging and interactive experience. With Firebase as our backend, we ensure secure and efficient data management.Stay tuned for our launch!", 
      img: "/images/naturafarm.png",
      githubLink: "https://github.com/shubhamdhobale/natura-farm.git",
    },
    { 
      id: 5, 
      title: "EStore", 
      description: "eStore is an online shopping platform where you can explore and buy everyday products. The project uses React for building the user interface, Tailwind CSS for styling, and Firebase for backend services like authentication and database management.", 
      img: "../../public/images/EStore.png",
      githubLink: "https://github.com/shubhamdhobale/EStrore.git",
      demolink: "https://e-strore.vercel.app/"
    }
  ];

  
  // const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: true }   );
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true });  

  return (
    <motion.div id="projects" className="pt-10 px-4 ml-1/4 md:px-8 lg:px-16 flex flex-col justify-center items-center"  ref={textRef}
    initial={{ opacity: 0 , x:-100}}
    animate={textInView ? { opacity: 1, x:0 } :{}}
    transition={{ duration: 2 }}>
      <p className="p-1 opacity-90 tracking-wider">Browse My Recent</p>
      <h1 className="text-3xl md:text-5xl font-bold tracking-wider">Projects</h1>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10 " >
        {
        projects.map((project) => (
          <motion.div key={project.id}  className="w-full shadow-xl rounded-lg flex flex-col gap-4 p-8 items-center justify-center transform hover:rotate-y-6 hover:scale-105 transition duration-500"
          ref={textRef}
      initial={{ opacity: 0 , x:200 , scale:0.5}}
      animate={textInView ? { opacity: 1, x:0 , scale:1} :{}}
      transition={{ 
      duration: 2 ,
      delay: 0.5,}}
      >
            <h1 className="font-bold text-2xl md:text-2xl p-2 tracking-wider">{project.title}</h1>
            <img src={project.img} alt="img" className="rounded-lg border bg-cover w-full h-48 md:h-60 hover:opacity-80 hover:scale-105 transition-all duration-500  object-cover shadow-lg" />
            <p className="text-sm md:text-base px-2 tracking-wide text-center">{project.description}</p>
            <div className="flex items-center justify-center gap-4 mt-4">
              <a href={project.githubLink} target="_blank" className="border rounded-3xl px-4 py-2 border-black hover:text-white hover:bg-gray-600 transition-all duration-500 tracking-wider">Github</a>
              <a href={project.demolink} target="_blank" className="border rounded-3xl px-4 py-2 border-black hover:text-white hover:bg-gray-600 transition-all duration-500 tracking-wider">Live Demo</a>
            </div>
          </motion.div>
        ))
        }
      </motion.div>
    </motion.div>
  );
};

export default Projects;
