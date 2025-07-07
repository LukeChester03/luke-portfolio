import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary-gradient border-t border-borderGray text-textPrimary py-8 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center max-w-6xl">
        {/* Left: Logo or site name */}
        <div className="mb-6 md:mb-0 text-xl font-semibold tracking-wide font-primary">
          Luke<span className="text-accent">.</span>
        </div>

        {/* Right: Social icons */}
        <div className="flex space-x-6 text-2xl text-textPrimary">
          <a
            href="https://github.com/LukeChester03"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-accent transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/luke-chester-844516220/?trk=opento_sprofile_pfeditor"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-accent transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:lukechester03@outlook.com"
            aria-label="Email"
            className="hover:text-accent transition-colors duration-300"
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
