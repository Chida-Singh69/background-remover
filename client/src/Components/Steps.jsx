import React from 'react'
import { assets } from '../assets/assets'

const Steps = () => {
  return (
    <div className="w-full max-w-3xl mx-auto my-16 p-8 bg-white rounded-2xl shadow-2xl flex flex-col gap-10">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-2 tracking-tight">How to Remove Image Background</h1>
      <p className="text-center text-gray-500 max-w-2xl mx-auto mb-6 text-base sm:text-lg">Follow these simple steps to get a clean, professional image with the background removed in seconds.</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Step 1 */}
        <div className="group flex flex-col items-center bg-gray-50 rounded-xl p-6 shadow-md hover:bg-blue-50 transition cursor-pointer border border-transparent hover:border-blue-400">
          <div className="bg-blue-100 group-hover:bg-blue-200 rounded-full p-4 mb-4 transition">
            <img src={assets.upload_icon} alt="Upload" className="w-12 h-12 object-contain" />
          </div>
          <h2 className="text-lg font-bold text-gray-800 mb-1">1. Upload Image</h2>
          <p className="text-gray-600 text-sm text-center mb-2">Choose the photo you want to edit. Supported formats: JPG, PNG, and more.</p>
          <span className="text-xs text-blue-500 font-medium group-hover:underline">Click to select or drag & drop</span>
        </div>
        {/* Step 2 */}
        <div className="group flex flex-col items-center bg-gray-50 rounded-xl p-6 shadow-md hover:bg-blue-50 transition cursor-pointer border border-transparent hover:border-blue-400">
          <div className="bg-blue-100 group-hover:bg-blue-200 rounded-full p-4 mb-4 transition">
            <img src={assets.remove_bg_icon} alt="Remove Background" className="w-12 h-12 object-contain" />
          </div>
          <h2 className="text-lg font-bold text-gray-800 mb-1">2. Remove Background</h2>
          <p className="text-gray-600 text-sm text-center mb-2">Our AI will instantly erase the background, keeping your subject sharp and clear.</p>
          <span className="text-xs text-blue-500 font-medium group-hover:underline">Automatic & fast processing</span>
        </div>
        {/* Step 3 */}
        <div className="group flex flex-col items-center bg-gray-50 rounded-xl p-6 shadow-md hover:bg-blue-50 transition cursor-pointer border border-transparent hover:border-blue-400">
          <div className="bg-blue-100 group-hover:bg-blue-200 rounded-full p-4 mb-4 transition">
            <img src={assets.download_icon} alt="Download" className="w-12 h-12 object-contain" />
          </div>
          <h2 className="text-lg font-bold text-gray-800 mb-1">3. Download Image</h2>
          <p className="text-gray-600 text-sm text-center mb-2">Save your new image with a transparent background, ready for any use.</p>
          <span className="text-xs text-blue-500 font-medium group-hover:underline">High quality, watermark-free</span>
        </div>
      </div>
    </div>

  )
}

export default Steps
