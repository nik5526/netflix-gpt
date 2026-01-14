import React from "react";
import { Netflix_LOGO } from "../utilities/links";
import user_ICON from "../assets/user_ICON.png";
import { signOut } from "firebase/auth";
import {auth} from "../utilities/firebase";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";


const Header = () => {

    const navigate = useNavigate();
    const user = useSelector((store)=> store.user)
    const handleSignOut =()=>{
            signOut(auth).then(() => {
                navigate("/");
            // Sign-out successful.
            }).catch((error) => {
            // An error happened.
            navigate("/error");
            });
    }
  return (
    <div className="absolute z-10 w-full bg-gradient-to-b from-black flex justify-between">
      <img
        className="w-60 ml-10 pl-10 pt-5"
        src={Netflix_LOGO}
        alt="netflix-logo"
      />
      {user && (<div className="flex items-center p-2 gap-3 m-2">
        <img className="w-10 h-10 rounded-lg" src={user_ICON} alt="user_icon" />
        <button
          onClick={handleSignOut}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          Sign Out
        </button>
      </div>)}
    </div>
  );
};
export default Header;
