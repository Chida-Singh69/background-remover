import React from "react";
import { assets } from "../assets/assets";

const Result = () => {
  return (
    <div className="mx-4 my-3 lg:mx-44 mt-14 min-h-[70vh] flex flex-col items-center">
      {/* Images Section */}
      <div className="w-full flex flex-col md:flex-row justify-center items-start gap-8">
        {/* Original Image Card */}
        <div className="flex-1 flex flex-col items-center bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-800 hover:scale-105 transition-all duration-300">
          <p className="mb-3 text-white font-semibold text-lg tracking-wide">
            Original
          </p>
          <img
            src={assets.image_w_bg}
            alt="Original"
            className="max-w-full h-auto rounded-lg shadow-md border-2 border-gray-700"
          />
        </div>

        {/* Removed Background Card */}
        <div className="flex-1 flex flex-col items-center bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-800 hover:scale-105 transition-all duration-300 min-h-[400px]">
          <p className="mb-3 text-white font-semibold text-lg tracking-wide">
            Removed Bg
          </p>
          <div className="flex items-center justify-center w-full h-full min-h-[220px]">
            <img
              src={assets.image_wo_bg}
              alt="Removed Background"
              className="max-w-full h-auto rounded-lg shadow-md border-2 border-blue-600"
            />
          </div>
        </div>
      </div>
      {/* Action Buttons */}
      <div className="flex justify-center sm:justify-end items-center flex-wrap gap-4 mt-8 w-full max-w-3xl">
        <button className=" bg-blue-600 hover:bg-blue-700 text-white  font-semibold px-7 py-2.5 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400">
          Try new image
        </button>
        <a
          className="px-8 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full hover:scale-105 transition-all duration-300 font-semibold shadow-lg"
          href=""
          download
        >
          Download Image
        </a>
      </div>
    </div>
  );
};

export default Result;
