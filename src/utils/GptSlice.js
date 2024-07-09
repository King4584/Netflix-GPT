import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name: "gpt",
  initialState: {
    showGptSearch: false,
    movieResults: null,
    movieNames: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
})

export const {toggleGptSearchView,addGptMovieResult} =GptSlice.actions

export default GptSlice.reducer;