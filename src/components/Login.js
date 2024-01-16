import React from "react";
import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [captcha, setCaptcha] = useState(false);
  const [errorMsg,setErrorMsg]=useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const userSignUp = () => {
    setIsLogedIn(!isLogedIn);
  };

  const captchaPage = () => {
    setCaptcha(!captcha);
  };

  const handleBtnClick = () => {
    const result = checkValidData(email.current.value, password.current.value,name.current.value);
    setErrorMsg(result);
  };

  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background-img"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="rounded-lg absolute w-4/12 my-36 pb-6 mx-auto right-0 left-0 bg-opacity-75  bg-black text-white"
      >
        <div className="mt-8 mx-8 my-3  text-3xl">
          {!isLogedIn ? "Sign In" : "Sign Up"}
        </div>
        {isLogedIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="rounded-lg p-2 mx-14 my-3 w-8/12 bg-gray-600"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email or Phone number"
          className="rounded-lg p-2 mx-14 my-3 w-8/12 bg-gray-600"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="rounded-lg p-2 mx-14 my-3 w-8/12 bg-gray-600"
        />
        <p className="text-red-500 p-0 mx-14 text-bold">{errorMsg}</p>
        <button
          onClick={handleBtnClick}
          className="rounded-lg p-2 mx-14 my-3 bg-red-600 w-8/12"
        >
          {!isLogedIn ? "Sign In" : "Sign Up"}{" "}
        </button>
        <h3 className="mx-5 mt-2 p-2 cursor-pointer" onClick={userSignUp}>
          {" "}
          {!isLogedIn
            ? "New to Netflix? Sign Up Now"
            : "Already a User ! Sign In Now"}{" "}
        </h3>
        <h6 className="mx-5 mt-2 p-2 w-10/12 ">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <span onClick={captchaPage} className="text-blue-600 cursor-pointer">
            Learn more.
          </span>
        </h6>
        {captcha && (
          <h6 className="mx-5 p-2 w-12/12 ">
            The information collected by Google reCAPTCHA is subject to the
            Google Privacy Policy and Terms of Service, and is used for
            providing, maintaining, and improving the reCAPTCHA service and for
            general security purposes (it is not used for personalised
            advertising by Google).
          </h6>
        )}
      </form>
    </div>
  );
};

export default Login;
