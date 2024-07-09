// import {configureStore} from "@reduxjs/toolkit";
import  userReducer  from "./userSlice";
import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movieSlice";
import gptReducer from "./GptSlice";
import configReducer from "./ConfigSlice";

const appStore= configureStore({
        reducer:{
            user : userReducer,
            movies :moviesReducer,
            gpt : gptReducer,
            config : configReducer,
        },
});

export default appStore;