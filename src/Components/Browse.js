import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = ()=>{

    //we have used hook to make it look clean and the fetch data will be safe in another place .
    useNowPlayingMovies();

    return (
        <div>
           <Header/>
           <MainContainer/>
           <SecondaryContainer/>
        </div>
    );
}

export default Browse;