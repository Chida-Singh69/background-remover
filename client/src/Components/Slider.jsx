import React, { useState } from "react";
import { assets } from "../assets/assets";

const Slider = () => {
  const [sliderPos, setSliderPosition] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };
  return (
    <div className="w-full max-w-4xl mx-auto my-16 flex flex-col gap-8 items-center">
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-2 tracking-tight">
        Remove background with{" "}
        <span className="text-blue-600">High Quality</span> and{" "}
        <span className="text-blue-600">High Accuracy</span>
      </h1>

      <div className="relative w-full max-w-3xl overflow-hidden m-auto rounded-xl">
        <img
          className="absolute top-0 left-0 w-full h-full"
          src={assets.image_w_bg}
          style={{ clipPath: `inset(0 ${100.2 - sliderPos}%0 0)` }}
          alt=""
        />

        <img
          src={assets.image_wo_bg}
          style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
          alt=""
        />

        <input
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-full z-10 slider"
          type="range"
          min={0}
          max={100}
          value={sliderPos}
          onChange={handleSliderChange}
        />
      </div>

      <div>
        <div className="mt-2 w-full flex justify-center md:justify-start">
          <input type="file" name="" id="upload1" hidden />
          <label
            htmlFor="upload1"
            className="flex items-center gap-2 sm:gap-3 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-5 py-2 sm:py-3 rounded-full shadow-md transition text-base sm:text-lg"
          >
            <img
              src={assets.upload_btn_icon}
              alt=""
              className="w-5 h-5 sm:w-6 sm:h-6"
            />
            <span className="font-medium">Upload image</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Slider;
