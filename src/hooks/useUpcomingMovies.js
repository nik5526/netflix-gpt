
import React from "react";
import {API_Options} from "../utilities/links";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {addUpcomingMovies} from "../utilities/movieSlice";

const useUpcomingMovies = ()=>{
    const dispatch = useDispatch();

    const Movies_Api = async()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", API_Options);
        const json = await data.json();
        console.log(json.results);
        dispatch(addUpcomingMovies(json.results));
    };

    useEffect(()=>{
        Movies_Api();
    },[]);

}

export default useUpcomingMovies;