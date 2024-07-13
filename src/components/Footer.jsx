import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="max-w-screen-lg mx-auto px-4 flex justify-between items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Krishna Maru. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/krish9575"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/krishna-maru-21a93121a"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
