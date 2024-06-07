import './App.css';
import { Navbar, About, Projects, Contact, Skills, Footer } from './components/index.js';
import Home from './components/Home.jsx';
// import { Outlet, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Navbar />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
      <Home />
      <About />
      <Skills /> 
      <Projects />
      <Contact />
      <Footer />
   
    </div>
  );
}

export default App;
