import React from "react";
import {IMG_PosterPath} from "../utilities/links";

const MovieCard = ({posterPath})=>{
    return (
        <div className="w-36 ">
            <img alt="IMG_CND" src={IMG_PosterPath + posterPath}/>
        </div>
    );
};


export default MovieCard;
