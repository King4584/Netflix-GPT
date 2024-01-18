// import {configureStore} from "@reduxjs/toolkit";
import  userReducer  from "./userSlice";
import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movieSlice";

const appStore= configureStore({
        reducer:{
            user : userReducer,
            movies :moviesReducer,
        },
});

export default appStore;