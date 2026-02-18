import React from "react";
import { Netflix_LOGO, Lang_Identifier } from "../utilities/links";
import user_ICON from "../assets/user_ICON.png";
import { signOut } from "firebase/auth";
import { auth } from "../utilities/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toogleGptSearchView } from "../utilities/searchSlice";
import {changeLanguage} from "../utilities/langSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch); //use this to only show the language option in the search bar.
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  const handleSearch = () => {
    dispatch(toogleGptSearchView());
  };

  const handleLangToggle = (e)=> {
    dispatch(changeLanguage(e.target.value));
   } 

  return (
    <div className="absolute z-10 w-full bg-gradient-to-b from-black flex justify-between">
      <img 
        className="w-48 ml-10 pl-10 pt-5"
        src={Netflix_LOGO}
        alt="netflix-logo"
      />
      {user && (
        <div className="flex items-center p-2 gap-3 m-2">
          {showGptSearch && <select className="bg-black text-white" onClick={handleLangToggle}>
            {Lang_Identifier.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option >
            ))}
          </select>}
          <button onClick={handleSearch}>
            <img
              className="rounded-xl"
              alt="gpt-image"
              src="https://thumbs.dreamstime.com/b/minsk-belarus-openai-chatgpt-logo-artifical-chatbot-system-chat-bot-button-web-app-phone-icon-symbol-editorial-vector-275376231.jpg"
              width="45px"
            />
          </button>
          <img
            className="w-10 h-10 rounded-lg"
            src={user_ICON}
            alt="user_icon"
          />
          <button
            onClick={handleSignOut}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
