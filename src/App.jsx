import { Navbar, About, Projects, Contact, Skills, Footer } from './components/index.js';
import Home from './components/Home.jsx';
import { motion} from "framer-motion";
import { Routes , Route } from 'react-router-dom';
import EmptyPages from './components/EmptyPage.jsx';


function App() {

  return (
    <motion.div className="flex flex-col items-center justify-center min-h-screen" >
      <Navbar />
      <div className="w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<EmptyPages />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </motion.div>
  );
}

export default App;
