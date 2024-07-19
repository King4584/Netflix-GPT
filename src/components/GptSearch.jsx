import React from "react";
import Gptsearchbar from "./Gptsearchbar";
import Gptsuggetion from "./Gptsuggetion";
import { BG_IMG } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="  flex justify-center">
      <div className=" absolute -z-10 w-screen">
        <img
          className="h-screen w-screen object-cover"
          src={BG_IMG}
          alt="background-img"
        />
      </div>
      <Gptsearchbar />
      <Gptsuggetion />
    </div>
  );
};

export default GptSearch;
