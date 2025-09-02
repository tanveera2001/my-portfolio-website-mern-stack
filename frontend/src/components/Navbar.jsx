import { useState } from "react";
import { NavLink } from "react-router-dom";

const navLinkClasses = ({ isActive }) =>
  `block py-3 pr-4 pl-3 text-lg duration-200 lg:border-0 lg:p-0 transform transition-transform hover:scale-105
  ${
    isActive
      ? "bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-red-500 to-red-600 font-semibold"
      : "text-gray-700 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-red-400 hover:via-red-500 hover:to-red-600"
  }`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="shadow sticky z-50 top-0 bg-white">
      <nav className="px-4 sm:px-6 md:px-8 py-4">
        <div className="flex flex-wrap justify-between lg:justify-center items-center mx-auto w-full max-w-[1024px]">

          {/* Hamburger button only on mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Toggle navigation</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Links */}
          <div
            className={`w-full lg:flex lg:w-auto ${isOpen ? "block" : "hidden"} flex-col items-center lg:items-start`}
            id="mobile-menu"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 text-center">
              <li>
                <NavLink to="/" end className={navLinkClasses} onClick={() => setIsOpen(false)}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" end className={navLinkClasses} onClick={() => setIsOpen(false)}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" end className={navLinkClasses} onClick={() => setIsOpen(false)}>
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" end className={navLinkClasses} onClick={() => setIsOpen(false)}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </header>
  );
};

export default Navbar;
