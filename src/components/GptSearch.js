import React, { useRef } from "react";
import { BG_URL } from "../utils/constants";
import { useSelector } from "react-redux";
import lang from "../utils/LangConstants";
import openai from "../utils/OpenAI";

const GptSearch = () => {
  const langKey = useSelector (store => store.config.lang);
  const searchText = useRef(null);
  const handleGptSearchClick = async ()=>{
    // console.log(searchText.current.value);
    //making an API call to GPT and get movie result
    const gptResults = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: 'Say this is a test' }],
      stream: true,
    });

    console.log(gptResults.choices)
    
    
    searchText.current.value ="";
  }

  return (
    <div className="  flex justify-center">
      <div className="absolute -z-10 w-screen">
        <img src={BG_URL} alt="background-img" />
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
    </div>
  );
};

export default GptSearch;
