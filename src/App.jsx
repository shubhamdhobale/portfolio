import { Navbar, About, Projects, Contact, Skills, Footer } from './components/index.js';
import Home from './components/Home.jsx';
import { motion} from "framer-motion";


function App() {

  return (
    <motion.div className="flex flex-col items-center justify-center min-h-screen" >
      <Navbar />
      <div className="w-full">
        <Home />
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
