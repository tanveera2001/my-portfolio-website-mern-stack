import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

const navLinkClasses = ({ isActive }) =>
  `block py-1 px-2 text-base duration-200 
  ${ 
    isActive 
    ? "bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-red-500 to-red-600 font-semibold"
    : "text-gray-700 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-red-400 hover:via-red-500 hover:to-red-600"
  }`;

const Footer = () => {
  return (
    <footer className="bg-white shadow-lg py-10">
      <div className="w-full max-w-[1024px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col items-center space-y-6">
        
        {/* Big Name with styled design */}
        <h1 className="text-5xl tracking-widest font-extrabold text-orange-700 font-serif">
          TANVEER
        </h1>

        {/* About Text */}
        <p className="text-center text-gray-500 max-w-2xl">
          A passionate learner and developer who loves
          building modern web applications and exploring new technologies.
        </p>

        {/* Navbar-like Menu (smaller now) */}
        <ul className="flex flex-wrap justify-center space-x-4 text-base font-medium">
          <li>
            <NavLink to="/" end className={navLinkClasses}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" end className={navLinkClasses}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" end className={navLinkClasses}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" end className={navLinkClasses}>
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex space-x-6 text-gray-500">
          <a
            href="https://github.com/tanveera2001"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-900"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/md-tanveer-ahmed-23b06023b/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://stackoverflow.com/users/20884813/md-tanveer-ahmed"
            target="_blank"
            rel="noreferrer"
            className="hover:text-orange-700"
          >
            <FaStackOverflow className="w-6 h-6" />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
