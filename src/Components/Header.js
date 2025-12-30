import React from "react";
import {Netflix_LOGO}from "../utilities/links";

const Header = ()=>{
    return <div className="absolute z-10 w-full bg-gradient-to-b from-black"> 
        <img className="w-60 ml-10 pl-10 pt-5" src={Netflix_LOGO} alt="netflix-logo"/>
    </div>
}
export default Header;