import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="text-black w-full p-4 md:p-6 fixed top-0 left-0 border border-black shadow-lg z-50 bg-white">
      <div className="container mx-auto flex flex-row md:flex-row justify-between items-center">
        <img src={logo} alt="logo" className='w-32 md:w-44 mb-4 md:mb-0 md:ml-10 ml-16'/>
        <ul className="flex flex-row gap-4 md:flex-row md:space-x-4 text-lg md:text-xl opacity-75 mb-4 md:mb-0 mr-4 md:mr-20">
          <li className='hover:underline hover:text-gray-900 transition-all duration-1000'>
            <a href="/home">Home</a>
          </li>
          <li className='hover:underline hover:text-gray-900 transition-all duration-1000'>
            <a href="#about">About</a>
          </li>
          <li className='hover:underline hover:text-gray-900 transition-all duration-1000'>
            <a href="#projects">Projects</a>
          </li>
          <li className='hover:underline hover:text-gray-900 transition-all duration-1000'>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
