import './App.css';
import { Navbar, About, Projects, Contact, Skills, Footer } from './components/index.js';
import Home from './components/Home.jsx';
import { motion } from 'framer-motion';
// import { Outlet, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <motion.div className="flex flex-col items-center justify-center w-full tracking-wider" >
      <Navbar />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
      <Home />
      <About initial={{opacity:0}} animate={{opacity: 1}} transition={{duration: 3}}/>
      <Skills initial={{opacity:0}} animate={{opacity: 1}} transition={{duration: 3}}/> 
      <Projects initial={{opacity:0}} animate={{opacity: 1}} transition={{duration: 3}}/>
      <Contact initial={{opacity:0}} animate={{opacity: 1}} transition={{duration: 3}}/>
      <Footer initial={{opacity:0}} animate={{opacity: 1}} transition={{duration: 3}}/>
   
    </motion.div>
  );
}

export default App;
