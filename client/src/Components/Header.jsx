import React from 'react'
import { assets } from '../assets/assets'


const Header = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 py-10 gap-y-10">
      {/* LEFT */}
      <div className="flex-1 flex flex-col gap-6 max-w-xl">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900">
          Remove the <br />
          <span className="text-blue-600">background</span> from <br />
          your images.
        </h1>

        <p className="text-gray-600 text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum dolores voluptatem hic blanditiis iure corporis nobis nostrum voluptatibus quasi eius.
        </p>
        
        <div className="mt-4">
          <input type="file" name="" id="upload1" hidden />
          <label htmlFor="upload1" className="flex items-center gap-3 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-full shadow-md transition">
            <img src={assets.upload_btn_icon} alt="" className="w-6 h-6" />
            <p className="font-medium">Upload image</p>
          </label>
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full max-w-md">
        <img src={assets.header_img} alt="" />

      </div>
    </div>
  )
}

export default Header
