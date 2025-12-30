import React from "react";
import Header from "./Header";
import { Netflix_Background_IMG } from "../utilities/links";
import { useState } from "react";

const SignIn = () => {
  // here what we are doing we are making the sign In and Sign Up page on the same page we are not using or directing to another page , we are doing it using the toggle feature .

  const [isSignIn, setIsSignIn] = useState(true);

  const toggleButton = () => {
    {
      setIsSignIn(!isSignIn);
    }
  };

  return (
    <div className="relative w-screen h-screen ">
      <div>
        <img
          className="absolute w-full h-full inset-0 object-cover"
          src={Netflix_Background_IMG}
          alt="background_img"
        />
      </div>

      {/* here it is used for overlay the whole bg image so that it can became dark and inset-0 means top bottom left right all 0 means no move. */}
      <div className="absolute bg-black/40 inset-0"></div>

      <Header />

      <div className="relative z-10 flex justify-center items-center h-full">
        <form className="w-[450px] flex flex-col bg-black/75 p-12 rounded-md text-white gap-6">
          <h2 className="text-2xl font-bold">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h2>

          {!isSignIn && (
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full p-3 bg-black/40 rounded-md border border-gray-400"
            />
          )}

          <input
            type="text"
            placeholder="Email Address "
            className="w-full p-3 bg-black/40 rounded-md border border-gray-400"
          />

          <input
            type="text"
            placeholder="Password"
            className="w-full p-3 bg-black/40 rounded-md border border-gray-400"
          />

          <button className="w-full p-3 bg-red-600 rounded-md font-semibold">
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>

          <p
            className="text-sm cursor-pointer text-red-600"
            onClick={toggleButton}
          >
            {isSignIn ? "New to Netflix? Sign Up Now" : "Already a member ?"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
