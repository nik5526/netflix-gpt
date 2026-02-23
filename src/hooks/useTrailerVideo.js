
import React from "react";
import { API_Options } from "../utilities/links";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {addTrailerVideo} from "../utilities/movieSlice";

const useTrailerVideo = (movieId)=>{

    //we can also map the api keys using useState also but we have done it  using our store because it is in the central level. 

    const dispatch = useDispatch();
    
        const teaser = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/"+ movieId +"/videos?language=en-US",
          API_Options
        );
        const json = await data.json();
    
        const videos = json.results;
    
        const trailer = videos.find(
          (video) => video.type === "Trailer" && video.site === "YouTube"
        );
    
    
        dispatch(addTrailerVideo(trailer));
      };
    
      useEffect(() => {
        teaser();
      }, []);
}

export default useTrailerVideo;