import React, { useRef } from "react";
import { assets } from "../assets/assets";

const Slider = () => {
  // Use a ref for slider position to avoid re-rendering on every move
  const sliderPos = useRef(50);
  const beforeImgRef = useRef(null);
  const afterImgRef = useRef(null);

  // Update images directly for smoothness
  const handleSliderChange = (e) => {
    const value = Number(e.target.value);
    sliderPos.current = value;
    if (beforeImgRef.current && afterImgRef.current) {
      beforeImgRef.current.style.clipPath = `inset(0 ${100.2 - value}% 0 0)`;
      afterImgRef.current.style.clipPath = `inset(0 0 0 ${value}%)`;
    }
  };

  // Set initial clipPath on mount
  React.useEffect(() => {
    if (beforeImgRef.current && afterImgRef.current) {
      beforeImgRef.current.style.clipPath = `inset(0 ${100.2 - sliderPos.current}% 0 0)`;
      afterImgRef.current.style.clipPath = `inset(0 0 0 ${sliderPos.current}%)`;
    }
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto my-16 flex flex-col gap-10 items-center bg-gray-950 rounded-3xl shadow-2xl px-4 py-10 border border-gray-800">
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-white mb-2 tracking-tight drop-shadow">
        Remove background with{" "}
        <span className="text-blue-500">High Quality</span> and{" "}
        <span className="text-blue-500">High Accuracy</span>
      </h1>

      <div className="relative w-full max-w-3xl aspect-video overflow-hidden m-auto rounded-xl border-2 border-gray-800 shadow-lg bg-gray-900">
        {/* Before Image */}
        <img
          ref={beforeImgRef}
          className="absolute top-0 left-0 w-full h-full object-cover transition-none"
          src={assets.image_w_bg}
          alt="Original"
        />
        {/* After Image */}
        <img
          ref={afterImgRef}
          className="absolute top-0 left-0 w-full h-full object-cover transition-none"
          src={assets.image_wo_bg}
          alt="Background Removed"
        />
        {/* Slider */}
        <input
          className="absolute top-1/2 left-1/2 -translate-x-1/2 w-full z-10 appearance-none bg-transparent h-1 focus:outline-none slider"
          type="range"
          min={0}
          max={100}
          defaultValue={sliderPos.current}
          onInput={handleSliderChange}
          style={{ accentColor: "#3b82f6" }}
        />
        {/* Upload Button */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-auto flex justify-center">
          <input type="file" name="" id="upload1" hidden />
          <label
            htmlFor="upload1"
            className="flex items-center gap-2 sm:gap-3 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-5 py-2 sm:py-3 rounded-full shadow-md transition text-base sm:text-lg font-semibold"
          >
            <img
              src={assets.upload_btn_icon}
              alt=""
              className="w-5 h-5 sm:w-6 sm:h-7"
            />
            <span>Upload image</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Slider;
