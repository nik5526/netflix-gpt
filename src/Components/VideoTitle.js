import React from "react";

const VideoTitle = ({ title, overview }) => {
  return <div className="pt-36 p-10 aspect-video absolute">
    <h1 className="text-3xl font-bold p-2 text-slate-100">{title}</h1>
    <p className="w-1/4 p-2 text-slate-100 "> {overview}</p>
    <div className="p-2">
        <button className="mr-2 border border-spacing-5 p-3 px-5 rounded-lg bg-slate-100 ">{"\u25B6"} Play</button>
        <button className="ml-2 border border-spacing-5 border-gray-700 p-3 px-6 rounded-lg bg-gray-700 bg-opacity-60 text-white font-semibold">{"\u2139"} More Info</button>
    </div>
  </div>;
};

export default VideoTitle;
