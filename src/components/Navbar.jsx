import logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <div >
          <nav className=" text-black w-full p-6 fixed top-0 left-0 border border-black	 ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold ml-36 w-40">
          <img src={logo} alt="logo" />
        </div>
        <div className="mr-24 text-xl">
          <a href="#" className="px-4 hover:text-gray-400 hover:underline">Home</a>
          <a href="#" className="px-4 hover:text-gray-400 hover:underline">About</a>
          <a href="#" className="px-4 hover:text-gray-400 hover:underline">Projects</a>
          <a href="#" className="px-4 hover:text-gray-400 hover:underline">Contact</a>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar