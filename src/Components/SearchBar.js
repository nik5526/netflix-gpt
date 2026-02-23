import React from "react";
import lang from "../utilities/langConst";
import { useSelector,useDispatch } from "react-redux";
import { useRef } from "react";
import client from "../utilities/openai_utilities";
import {API_Options} from "../utilities/links";
import {addGptMoviesResults} from "../utilities/searchSlice";


const SearchBar = () => {

  const dispatch = useDispatch();

  const langChange = useSelector((store) => store.lang.langState);
  const searchText = useRef(null);

  //this function will search the movies in the tmdb and return the results.
  const getResults = async(movie)=>{
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie +  "&include_adult=false&language=en-US&page=1",API_Options);

    const json = await data.json();
    return json.results;
  }

  const handleSearchClick = async () => {
    const userQuery = searchText.current.value;

    if (!userQuery.trim()) return;
    const prompt =
      "Act as a movie recommendation system. " +
      "Respond with exactly 5 movie names, separated by commas. " +
      "No explanation, no numbering. " +
      "Query: " +
      userQuery;

    try {
      const response = await client.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "You are a movie recommendation engine." },
          { role: "user", content: prompt },
        ],
        max_tokens: 100,
        temperature: 0.7,
      });

      console.log(response.choices[0]?.message?.content);
      //it will give us the array of the movies .
      const getMovie = response.choices[0]?.message?.content.split(",");

      //now we will map the movies so that we can get tmdb results .
      const promiseArray = getMovie.map(movie => movie.getResults(movie));

      //now the tmdbSearch will make promises so what we will do we will use promise.all js function which will resolve all the promise and give us the results .

      const resolvePromise = await Promise.all(promiseArray);
      dispatch(addGptMoviesResults({movieName : getMovie , movieResults : resolvePromise}));

      console.log(resolvePromise);

    } catch (error) {
      console.error("OpenAI error:", error);
    }
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="bg-black w-1/2 grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="col-span-9 rounded-md p-3 m-3"
          type="text"
          placeholder={lang[langChange].placeholder}
        />
        <button
          className="col-span-3 m-3 py-2 px-3 bg-red-600 text-white rounded-md"
          onClick={handleSearchClick}
        >
          {lang[langChange].search}
        </button>
      </form>
    </div>
  );
};
export default SearchBar;
