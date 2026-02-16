import useTrailerVideo from "../hooks/useTrailerVideo";
import { useSelector } from "react-redux";

const VideoContainer = ({ movieId }) => {

  useTrailerVideo( movieId );
  
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  if (!trailerVideo) return null;

  console.log("Trailer video:", trailerVideo);

  return (
    <div>
      <iframe
        className="w-screen h-screen object-cover scale-125"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1" +
          "&mute=1" +
          "&controls=0" +
          "&rel=0" +
          "&loop=1" +
          "&playlist=" +
          trailerVideo?.key +
          "&modestbranding=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoContainer;
