import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, Supported_lang } from "../utils/constants";
import { toggleGptSearchView } from "../utils/GptSlice";
import { changeLanguage } from "../utils/ConfigSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [lang,setLang]= useState(false);
  // const [isLogedIn]=useState(false);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.

        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
        // ...
      }
    });
    // unsubscribe will be called whenever my components unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    //toggle the GPT search components
    dispatch(toggleGptSearchView());
    setLang(!lang);
  };
  const handlelangSelect = (e) =>{
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className="flex justify-between absolute w-full px-8 py-6 z-10 bg-gradient-to-b from-black">
      <img className="w-44" src={LOGO} alt=" netflix-logo" />
      <div className="flex justify-center align-middle h-full gap-6">
        {user && (
          <>
            {/* <img className="" src={user?.photoURL} alt="icon"/> */}
            { lang && (<select onChange={handlelangSelect} className=" m-2 p-2 bg-gray-600 text-white rounded-lg">
              {Supported_lang.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>)}
            <button
              className=" m-2 p-2 bg-purple-600 text-white rounded-lg"
              onClick={handleGptSearchClick}
            >
              {!lang ? "GPT Search" : "Home Page"}
            </button>
            <button className="m-2 p-2 cursor-default text-white rounded-lg">
              Hyy {user?.displayName}{" "}
            </button>
            <button
              onClick={handleSignOut}
              className="text-red-600 text-bold text-xl "
            >
              {" "}
              Sign Out
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
