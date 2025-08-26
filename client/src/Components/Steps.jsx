import React from 'react'
import { assets } from '../assets/assets'

const Steps = () => {
  return (
    <div className="w-full max-w-4xl mx-auto my-20 px-4 py-12 bg-gray-950 rounded-3xl shadow-2xl flex flex-col gap-12 border border-gray-800">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-white mb-2 tracking-tight drop-shadow">
        How to Remove Image Background
      </h1>
      <p className="text-center text-gray-300 max-w-2xl mx-auto mb-6 text-base sm:text-lg">
        Follow these simple steps to get a clean, professional image with the background removed in seconds.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Step 1 */}
        <div className="group flex flex-col items-center bg-gray-900 rounded-2xl p-8 shadow-lg hover:bg-blue-950/60 transition cursor-pointer border border-gray-800 hover:border-blue-500 hover:shadow-xl">
          <div className="bg-blue-900 group-hover:bg-blue-700 rounded-full p-5 mb-5 transition shadow-md">
            <img src={assets.upload_icon} alt="Upload" className="w-12 h-12 object-contain" />
          </div>
          <h2 className="text-lg font-bold text-white mb-1 tracking-wide">1. Upload Image</h2>
          <p className="text-gray-300 text-sm text-justify mb-3">
            Choose the photo you want to edit.<br />Supported formats: JPG, PNG, and more.
          </p>
          <span className="text-xs text-blue-400 font-medium group-hover:underline group-hover:text-blue-300 transition">
            Click to select or drag & drop
          </span>
        </div>
        {/* Step 2 */}
        <div className="group flex flex-col items-center bg-gray-900 rounded-2xl p-8 shadow-lg hover:bg-blue-950/60 transition cursor-pointer border border-gray-800 hover:border-blue-500 hover:shadow-xl">
          <div className="bg-blue-900 group-hover:bg-blue-700 rounded-full p-5 mb-5 transition shadow-md">
            <img src={assets.remove_bg_icon} alt="Remove Background" className="w-12 h-12 object-contain" />
          </div>
          <h2 className="text-lg font-bold text-white text-center mb-1 tracking-wide">2. Remove Background</h2>
          <p className="text-gray-300 text-sm text-justify mb-3">
            Our AI will instantly erase the background,<br />keeping your subject sharp and clear.
          </p>
          <span className="text-xs text-blue-400 font-medium group-hover:underline group-hover:text-blue-300 transition">
            Automatic & fast processing
          </span>
        </div>
        {/* Step 3 */}
        <div className="group flex flex-col items-center bg-gray-900 rounded-2xl p-8 shadow-lg hover:bg-blue-950/60 transition cursor-pointer border border-gray-800 hover:border-blue-500 hover:shadow-xl">
          <div className="bg-blue-900 group-hover:bg-blue-700 rounded-full p-5 mb-5 transition shadow-md">
            <img src={assets.download_icon} alt="Download" className="w-12 h-12 object-contain" />
          </div>
          <h2 className="text-lg font-bold text-white mb-1 tracking-wide">3. Download Image</h2>
          <p className="text-gray-300 text-sm text-justify mb-3">
            Save your new image with a transparent background,<br />ready for any use.
          </p>
          <span className="text-xs text-blue-400 font-medium group-hover:underline group-hover:text-blue-300 transition">
            High quality, watermark-free
          </span>
        </div>
      </div>
    </div>
  )
}

export default Steps
