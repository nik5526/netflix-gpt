import React from "react";
import {API_Options} from "../utilities/links";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {addPopularMovies} from "../utilities/movieSlice";

const usePopularMovies = ()=>{
    const dispatch = useDispatch();

    const Movies_Api = async()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", API_Options);
        const json = await data.json();
        console.log(json.results);
        dispatch(addPopularMovies(json.results));
    };

    useEffect(()=>{
        Movies_Api();
    },[]);

}

export default usePopularMovies;