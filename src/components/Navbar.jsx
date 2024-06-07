// import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="text-black w-full p-6 fixed top-0 left-0 border border-black shadow-lg z-50 bg-white">
      <div className="container mx-auto flex justify-between items-center">
        <img src={logo} alt="logo" className='ml-36 w-44' />
        <ul className="flex space-x-4 text-xl opacity-75 mr-20">
          <li className='hover:underline hover:text-gray-900 transition-all duration-1000'>
            {/* <Link to="/">Home</Link> */}
            <a href="/home">Home</a>
          </li>
          <li className='hover:underline hover:text-gray-900 transition-all duration-1000'>
            {/* <Link to="/about">About</Link> */}
            <a href="#about">About</a>
          </li>
          <li className='hover:underline hover:text-gray-900 transition-all duration-1000'>
            {/* <Link to="/projects">Projects</Link> */}
            <a href="#projects">Projects</a>
          </li>
          <li className='hover:underline hover:text-gray-900 transition-all duration-1000'>
            {/* <Link to="/contact">Contact</Link> */}
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
