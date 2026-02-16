import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-[30%] left-16 z-20 text-white max-w-xl">
      
      <h1 className="text-5xl font-extrabold drop-shadow-lg">
        {title}
      </h1>

      <p className="mt-4 text-sm leading-6 text-gray-200 line-clamp-4">
        {overview}
      </p>

      <div className="flex gap-4 mt-6">   

        <button className="bg-white text-black px-8 py-2 rounded-md font-semibold hover:bg-gray-200 flex items-center gap-2">
          {"\u25B6"} Play
        </button>

        <button className="bg-gray-500/70 text-white px-6 py-2 rounded-md font-semibold hover:bg-gray-500 flex items-center gap-2">
          {"\u2139"} More Info
        </button>
      </div>
    </div>
  );
};


export default VideoTitle;
