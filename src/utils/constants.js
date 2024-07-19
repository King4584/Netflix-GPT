export const logo ="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const userpic="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"

export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjYzZDgyMGM1YjZmYzgwZTRkOTE0YjA5NzhhZTRiMiIsIm5iZiI6MTcyMDcyMDA3OS4yMjkyOTIsInN1YiI6IjY1YTkzYmQ4NmY5NzQ2MDEzNGQ5MGMxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oAs7mz_PqxO1PfJJDWaUclYqdCF8uME_RaAWKCYi3UQ'
    }
  };

export const API_Options ={
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer '+ import.meta.env.VITE_TMDB_API_KEY,
    }
}

export const IMG_CDN = "https://image.tmdb.org/t/p/w500/"


export const BG_IMG ="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_medium.jpg"

export const OPENAI_API_KEY =import.meta.env.VITE_OPENAI_API_KEY;

export const Supported_lang = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" }
];
