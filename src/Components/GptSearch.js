import React from "react";
import {Netflix_Background_IMG} from "../utilities/links" ;
import SearchBar from "./SearchBar";

const GptSearch = ()=>{
    return (
        <div>
            <div className="absolute -z-20">
                <img alt="Netflix_bg" src={Netflix_Background_IMG } />
            </div>
            <SearchBar/>
        </div>
    );
}

export default GptSearch;