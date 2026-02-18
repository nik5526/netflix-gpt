import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoContainer from "./VideoConatainer";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  console.log("NOW PLAYING MOVIES:", movies);
  if (!movies) return null;

  const mainMovie = movies[0];
  console.log(movies[0]);

  const { original_title, overview, id } = mainMovie;
  return (
    <div className="relative w-screen h-[90vh]  ">
      
      <div className="absolute inset-0 -z-10">
        <VideoContainer movieId={id} />
      </div>
        {/* for overlaying the netflix gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-0"></div>

      <VideoTitle title={original_title} overview={overview} />
    </div>
  );
};

export default MainContainer;
