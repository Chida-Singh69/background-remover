import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-50 via-white to-violet-100 text-gray-900 py-8 px-4 mt-16 border-t border-violet-200 shadow-inner">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo and Brand */}
        <div className="flex items-center gap-3 mb-4 md:mb-0">
          <img src={assets.logo_icon} alt="Logo" className="w-8 h-8" />
          <span className="font-bold text-lg text-violet-700">bg.removal</span>
        </div>
        {/* Links */}
        <div className="flex flex-wrap gap-6 text-sm justify-center">
          <a href="/" className="hover:text-violet-600 transition font-medium">Home</a>
          <a href="#" className="hover:text-violet-600 transition font-medium">Features</a>
          <a href="/buy" className="hover:text-violet-600 transition font-medium">Pricing</a>
        </div>
        {/* Socials */}
        <div className="flex gap-4">
          <a href="#" aria-label="Facebook">
            <img src={assets.facebook_icon} alt="Facebook" className="w-9 h-9 hover:scale-150 hover:drop-shadow transition" />
          </a>
          <a href="#" aria-label="Twitter">
            <img src={assets.twitter_icon} alt="Twitter" className="w-9 h-9 hover:scale-150 hover:drop-shadow transition" />
          </a>
          <a href="#" aria-label="Google Plus">
            <img src={assets.google_plus_icon} alt="Google Plus" className="w-9 h-9 hover:scale-150 hover:drop-shadow transition" />
          </a>
        </div>
      </div>
      <div className="text-center text-xs text-violet-700 mt-6 font-medium">
        &copy; {new Date().getFullYear()} Background Remover. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
