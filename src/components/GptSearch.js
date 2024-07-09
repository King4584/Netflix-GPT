import React, { useRef } from "react";
import { API_OPTIONS, BG_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/LangConstants";
import openai from "../utils/OpenAI";
import { addGptMovieResult } from "../utils/GptSlice";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptSearch = () => {
  const dispatch = useDispatch();
  const langKey = useSelector (store => store.config.lang);
  const searchText = useRef(null);

   // search movie in TMDB
   const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    // Make an API call to GPT API and get Movie Results

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      // TODO: Write Error Handling
    }

    console.log(gptResults.choices?.[0]?.message?.content);
    
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    // [Promise, Promise, Promise, Promise, Promise]

    const tmdbResults = await Promise.all(promiseArray);

    console.log(tmdbResults);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="  flex justify-center">
      <div className=" absolute -z-10 w-screen">
        <img className="h-screen w-screen object-cover" src={BG_URL} alt="background-img" />
      </div>
      <form className="mt-40 bg-black mx-2 grid-cols-12 " onSubmit={(e)=>{
        e.preventDefault()
      }}>
        <input
          ref={searchText}
          className="bg-gray-600 text-white mx-2 p-2 w-80 rounded-lg "
          placeholder={lang[langKey].placeholder}
        />
        <button className="bg-red-600 text-white p-2 m-2 rounded-lg" onClick={handleGptSearchClick}>
          {lang[langKey].search}
        </button>   
      </form>
      <GptMovieSuggestions/>
    </div>
  );
};

export default GptSearch;
