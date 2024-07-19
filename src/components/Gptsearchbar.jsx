
import React, { useRef } from 'react'
import openai from '../utils/openai';
import lang from '../utils/LangConstants'
import { API_Options, options } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addgptmovieresult } from '../utils/gptSlice';


const Gptsearchbar = () => {
    const dispatch =useDispatch();
    const searchtext =useRef(null);
    const langKey = useSelector (store => store.config.lang);
    //search movie tmdb


    const searchmovietmdb =async(movie)=>{
        const data =await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",options)
        const json = await data.json();
        return json?.results;

    }
    const handlegptsearchclick= async () =>{
        // console.log(searchtext.current.value);

        const gptQuery="Act as a movie Recommendation syaytem and suggest the movie names for the query "+searchtext.current.value+". Only give name of 6 movies , commasaperated movies like given in examples ahead. Example result : dil chahta hai , kabir singh , Fraud , kabhi khushi kabhi kham , Jawaan, lOVE STORY";
        const gptResults = await openai.chat.completions.create({
          messages: [{ role: 'user', content: gptQuery }],
          model: 'gpt-3.5-turbo',
        });
      

        const gptmovies=gptResults.choices?.[0]?.message?.content.split(",");

        const promisearray=gptmovies.map((movies)=> searchmovietmdb(movies));

        const tmdbresults= await Promise.all(promisearray)

        // console.log("tmdb",tmdbresults[0]);
        dispatch(addgptmovieresult({moviename:gptmovies,movielist:tmdbresults}));
        
      }
  return (
    <div className='flex '>
        <form className="mt-40 bg-black mx-2 py-2 grid-cols-12 " onSubmit={(e)=>{
        e.preventDefault()
      }}>
        <input
          ref={searchtext}
          className="bg-gray-600 text-white mx-2 p-2 w-80 rounded-lg "
          placeholder={lang[langKey].placeholder}
        />
        <button className="bg-red-600 text-white p-2 m-2 rounded-lg  " onClick={handlegptsearchclick}>
          {lang[langKey].search}
        </button>   
      </form>
    </div>





  )
}

export default Gptsearchbar