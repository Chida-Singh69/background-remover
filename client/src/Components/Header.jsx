import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-8 py-10 sm:py-16 gap-8 md:gap-6 lg:gap-16 w-full max-w-6xl mx-auto bg-gray-950 rounded-3xl shadow-2xl">
      {/* LEFT */}
      <div className="flex-1 flex flex-col gap-6 max-w-xl w-full items-center md:items-start text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white drop-shadow-lg">
          Remove the <br />
          <span className="text-blue-500">background</span> from <br />
          your images.
        </h1>

        <p className="text-gray-300 text-lg sm:text-xl max-w-md md:max-w-none mx-auto md:mx-0">
          Instantly erase backgrounds from your photos with a single click.<br className="hidden sm:block" />
          Fast, free, and easy to use on any device.
        </p>
        <div className="mt-3 w-full flex justify-center md:justify-start">
          <input type="file" name="" id="upload1" hidden />
          <label
            htmlFor="upload1"
            className="flex items-center gap-3 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-200 text-lg font-semibold"
          >
            <img src={assets.upload_btn_icon} alt="" className="w-6 h-6" />
            <span>Upload image</span>
          </label>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex-1 flex justify-center md:justify-end w-full max-w-xs sm:max-w-sm md:max-w-md">
        <img
          src={assets.header_img}
          alt="Header visual"
          className="w-full h-auto object-contain rounded-2xl shadow-xl border-2 border-gray-800 bg-gray-900"
        />
      </div>
    </div>
  )
}

export default Header
