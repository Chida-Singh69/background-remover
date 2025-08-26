import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-gray-950/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="flex items-center justify-between mx-4 py-3 lg:mx-44">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group mt-2">
          <img
            className="w-10 h-10 sm:w-12 sm:h-12 mt-0 transition-transform duration-200 group-hover:scale-105"
            src={assets.logo_icon}
            alt="Company logo featuring stylized text Background Remover in bold blue letters on a white background, conveying a modern and professional tone"
          />
          <span className="font-bold text-xl text-white whitespace-nowrap">
            bg.removal
          </span>
        </Link>

        {/* Navigation Links (expandable for more links if needed) */}
        <div className="flex items-center gap-2 sm:gap-6">
          {/* Example: Add more links here if needed */}
          {/* <Link to="/buy" className="text-gray-300 hover:text-blue-400 font-medium transition-colors duration-200">Buy Credits</Link> */}

          {/* Get Started Button */}
          <Link to="/">
            <button className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white px-5 py-2 sm:px-8 sm:py-3 text-sm sm:text-base rounded-full font-semibold shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400">
              Get Started
              <img className="w-4 sm:w-5" src={assets.arrow_icon} alt="" />
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
