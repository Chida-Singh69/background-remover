import React from 'react'
import { assets } from '../assets/assets'


const Header = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-6 py-8 sm:py-12 gap-6 md:gap-4 lg:gap-10 w-full max-w-6xl mx-auto">
      {/* LEFT */}
      <div className="flex-1 flex flex-col gap-5 max-w-xl w-full items-center md:items-start text-center md:text-left">
        <h1 className="text-3xl xs:text-4xl sm:text-5xl font-bold leading-tight text-gray-900">
          Remove the <br />
          <span className="text-blue-600">background</span> from <br />
          your images.
        </h1>

        <p className="text-gray-600 text-base sm:text-lg max-w-md md:max-w-none mx-auto md:mx-0">
          Instantly erase backgrounds from your photos with a single click. Fast, free, and easy to use on any device.
        </p>
        <div className="mt-2 w-full flex justify-center md:justify-start">
          <input type="file" name="" id="upload1" hidden />
          <label htmlFor="upload1" className="flex items-center gap-2 sm:gap-3 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-5 py-2 sm:py-3 rounded-full shadow-md transition text-base sm:text-lg">
            <img src={assets.upload_btn_icon} alt="" className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="font-medium">Upload image</span>
          </label>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex-1 flex justify-center md:justify-end w-full max-w-xs sm:max-w-sm md:max-w-md">
        <img src={assets.header_img} alt="" className="w-full h-auto object-contain rounded-xl shadow-md" />
      </div>
    </div>
  )
}

export default Header
