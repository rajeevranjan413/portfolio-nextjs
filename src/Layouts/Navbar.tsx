import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="text-3xl font-bold text-indigo-500">
              Rajeev
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10">
            <a
              href="#about"
              className="text-lg font-medium hover:text-indigo-400 transition duration-300"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-lg font-medium hover:text-indigo-400 transition duration-300"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-lg font-medium hover:text-indigo-400 transition duration-300"
            >
              Contact Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-indigo-500 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-indigo-400 transition duration-300"
              onClick={toggleMenu} // Close menu on item click
            >
              About
            </a>
            <a
              href="#projects"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-indigo-400 transition duration-300"
              onClick={toggleMenu} // Close menu on item click
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-indigo-400 transition duration-300"
              onClick={toggleMenu} // Close menu on item click
            >
              Contact me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
