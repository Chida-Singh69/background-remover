import React from "react";
import { assets } from "../assets/assets";

const Result = () => {
  return (
    <div className="mx-4 my-3 lg:mx-44 mt-14 min-h-[70vh] flex flex-col items-center">
      {/* Container for both images, responsive layout */}
      <div className="w-full flex flex-col md:flex-row justify-center items-start gap-8">
        {/* Original Image Section */}
        <div className="flex-1 flex flex-col items-center bg-gray-800 rounded-xl p-6 shadow-lg transition-all duration-300 hover:scale-105">
          <p className="mb-3 text-white font-semibold text-lg tracking-wide">
            Original
          </p>
          <img
            src={assets.image_w_bg}
            alt="Original"
            className="max-w-full h-auto rounded-lg shadow-md border-2 border-gray-700"
          />
        </div>

        {/* Removed Background Section */}
        <div className="flex-1 flex flex-col items-center bg-gray-800 rounded-xl p-6 shadow-lg transition-all duration-300 hover:scale-105 min-h-[400px]">
          <p className="mb-3 text-white font-semibold text-lg tracking-wide">
            Removed Bg
          </p>
          <div className="flex items-center justify-center w-full h-full min-h-[220px]">
            {/* 
              If the background removal is in progress, show a spinner.
              Replace the spinner with the result image when ready.
            */}
            {/* Spinner Animation */}
            {/* <div className="relative flex flex-col items-center">
              <div className="border-4 border-violet-600 rounded-full h-14 w-14 border-t-transparent animate-spin mb-2"></div>
              <span className="text-violet-400 text-sm mt-1">
                Processing...
              </span>
            </div> */}
            
              {/* To show the result image, uncomment below and remove the spinner above: */}
              <img
                src={assets.image_wo_bg}
                alt="Removed Background"
                className="max-w-full h-auto rounded-lg shadow-md border-2 border-violet-600"
              />
            
          </div>
        </div>
      </div>
      <div className="flex justify-center sm:justify-end items-center flex-wrap gap-4 mt-6">
        {/* Buttons */}
        <button className="bg-violet-600 hover:bg-violet-700 text-white font-semibold px-6 py-2 rounded-full shadow transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-violet-400 ">
          Try new image
        </button>
        <a 
          className="px-8 py-2.5 text-white text-sm bg-gradient-to-r to from-violet-600 to bg-fuchsia-400 rounded-full hover:scale-105 transition-all duration-500 font-semibold"
          href ="">Download Image</a>
      </div>
    </div>
  );
};

export default Result;
