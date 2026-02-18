import React from "react";
import lang from "../utilities/langConst";
import {useSelector} from "react-redux";

const SearchBar = () => {

  const langChange = useSelector((store) => store.lang.langState)
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12 rounded-lg">
        <input
          className="col-span-9 rounded-md p-3 m-3"
          type="text"
          placeholder={lang[langChange ].placeholder}
        />
        <button className="col-span-3 m-3 py-2 px-3 bg-red-600 text-white rounded-md">
          {lang[langChange].search}
        </button>
      </form>
    </div>
  );
};
export default SearchBar;
