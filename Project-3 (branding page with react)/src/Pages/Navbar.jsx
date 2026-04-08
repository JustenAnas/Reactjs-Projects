 import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="">
            <Link to="/"><img  src="./brand_logo.png" alt="" /></Link>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-8 text-gray-700 font-medium cursor-pointer">
          <Link
              to='/'
            className="hover:text-black transition-colors duration-200"
          >
            Home
          </Link>
          <a
            href="#"
            className="hover:text-black transition-colors duration-200"
          >
            About
          </a>
          <a
          href="#" 
            className="hover:text-black transition-colors duration-200"
          >
            Contact
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;