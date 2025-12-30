import React from "react";
import Header from "./Header";
import { Netflix_Background_IMG } from "../utilities/links";
const SignIn = () => {
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
        <form className="w-[450px] flex flex-col bg-black/75 p-12 rounded-md text-white gap-4" >

            <h2 className="text-2xl font-bold">Sign In</h2>
          <input
            type="text"
            placeholder="Enter Email or Phone Number"
            className="w-full p-3 bg-black/40 rounded-md border border-gray-400"
          />
          <input
            type="text"
            placeholder="Enter the Password"
            className="w-full p-3 bg-black/40 rounded-md border border-gray-400"
          />
          <button className="w-full p-3 bg-red-600 rounded-md font-semibold">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
