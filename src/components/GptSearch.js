import React from "react";
import { BG_URL } from "../utils/constants";
import { useSelector } from "react-redux";
import lang from "../utils/LangConstants";

const GptSearch = () => {
  const langKey = useSelector (store => store.config.lang);
  return (
    <div className="  flex justify-center">
      <div className="absolute -z-10 w-screen">
        <img src={BG_URL} alt="background-img" />
      </div>
      <form className="mt-40 bg-black mx-2 grid-cols-12 ">
        <input
          className="bg-gray-600 text-white mx-2 p-2 w-80 rounded-lg "
          placeholder={lang[langKey].placeholder}
        />
        <button className="bg-red-600 text-white p-2 m-2 rounded-lg">
          {lang[langKey].search}
        </button>   
      </form>
    </div>
  );
};

export default GptSearch;
