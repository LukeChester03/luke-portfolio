import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary border-t border-red-600 text-white py-8 px-6 mt-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center max-w-6xl">
        {/* Left: Logo or site name */}
        <div className="mb-6 md:mb-0 text-xl font-semibold tracking-wide font-primary">
          Luke<span className="text-red-600">.</span>
        </div>

        {/* Center: Navigation links */}
        <nav className="mb-6 md:mb-0 space-x-6 text-sm uppercase font-semibold tracking-wider font-primary">
          <a href="#home" className="hover:text-red-600 transition-colors duration-300">
            Home
          </a>
          <a href="#services" className="hover:text-red-600 transition-colors duration-300">
            Services
          </a>
          <a href="#cv" className="hover:text-red-600 transition-colors duration-300">
            CV
          </a>
          <a href="#portfolio" className="hover:text-red-600 transition-colors duration-300">
            Portfolio
          </a>
          <a href="#contact" className="hover:text-red-600 transition-colors duration-300">
            Contact
          </a>
        </nav>

        {/* Right: Social icons */}
        <div className="flex space-x-6 text-2xl text-white">
          <a
            href="https://github.com/LukeChester03"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-red-600 transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/luke-chester-844516220/?trk=opento_sprofile_pfeditor"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-red-600 transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:youremail@example.com"
            aria-label="Email"
            className="hover:text-red-600 transition-colors duration-300"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="mt-6 text-center text-xs text-gray-500 font-primary">
        © {new Date().getFullYear()} Luke Chester. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
