import React from "react";
import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_Avatar } from "../utils/constants";

const Login = () => {
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [captcha, setCaptcha] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [LogedInMsg, setLogedInMsg] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();

  const userSignUp = () => {
    setIsLogedIn(!isLogedIn);
  };

  const captchaPage = () => {
    setCaptcha(!captcha);
  };

  const handleBtnClick = () => {
    const result = checkValidData(email.current.value, password.current.value, {
      /*,name.current.value*/
    });
    setErrorMsg(result);
    if (result) return;

    //this means that email and password is valid
    if (isLogedIn) {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          // const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: USER_Avatar,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMsg(error.message);
            });
          //console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          // const user = userCredential.user;
          // console.log(user);
          setLogedInMsg("You have successfully Signed In to the website...!!!");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <>
      <Header />
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={BG_URL}
            alt="background-img"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="relative rounded-lg w-11/12 max-w-md mx-auto p-6 bg-opacity-75 bg-black text-white md:w-4/12 md:p-8 lg:w-3/12"
        >
          <div className="text-center text-3xl">
            {!isLogedIn ? "Sign In" : "Sign Up"}
          </div>
          {isLogedIn && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="rounded-lg p-2 my-3 w-full bg-gray-600"
            />
          )}
          <input
            ref={email}
            type="email"
            placeholder="Email or Phone number"
            className="rounded-lg p-2 my-3 w-full bg-gray-600"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="rounded-lg p-2 my-3 w-full bg-gray-600"
          />
          <p className="text-red-500">{errorMsg}</p>
          <p className="text-green-500">{LogedInMsg}</p>
          <button
            onClick={handleBtnClick}
            className="rounded-lg p-2 my-3 bg-red-600 w-full"
          >
            {!isLogedIn ? "Sign In" : "Sign Up"}{" "}
          </button>
          <h3 className="text-center cursor-pointer" onClick={userSignUp}>
            {" "}
            {!isLogedIn
              ? "New to Netflix? Sign Up Now"
              : "Already a User ! Sign In Now"}{" "}
          </h3>
          <h6 className="text-center mt-2">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
            <span onClick={captchaPage} className="text-blue-600 cursor-pointer">
              Learn more.
            </span>
          </h6>
          {captcha && (
            <h6 className="text-center mt-2">
              The information collected by Google reCAPTCHA is subject to the
              Google Privacy Policy and Terms of Service, and is used for
              providing, maintaining, and improving the reCAPTCHA service and for
              general security purposes (it is not used for personalised
              advertising by Google).
            </h6>
          )}
        </form>
      </div>
    </>

  );
};

export default Login;
