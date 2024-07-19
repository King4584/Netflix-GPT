import React, { useState } from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleGptSearchView } from "../utils/gptSlice";
import { addUser } from "../utils/userSlice";
import logo from "../../assets/images/logo.png";
import { userpic, Supported_lang } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice.jsx"

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("en"); // State to manage selected language
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLangSelect = (e) => {
    const selectedValue = e.target.value;
    setSelectedLang(selectedValue); // Update selected language
    dispatch(changeLanguage(selectedValue)); // Dispatch action to update Redux state
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const gptbtn = useSelector((store) => store.gpt.showGptSearch);
  const user = useSelector((store) => store.user);
  const userName = user?.displayName;

  const gptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        dispatch(addUser(userName));
      })
      .catch((error) => {
        // Handle error
      });
  };

  return (
    <div className="px-6 py-2 bg-gradient-to-b from-black z-20 w-full flex flex-col md:flex-row justify-between items-center absolute">
      <img className="w-48 pt-4 h-16 mx-auto md:ml-0" src={logo} alt="logo" />
      
      {user && (
        <div className="mt-2 flex items-center md:ml-auto">
          {gptbtn && (
            <select
              className="m-2 p-2 h-14 bg-gray-600 text-white rounded-lg"
              onChange={handleLangSelect}
              value={selectedLang}
            >
              {Supported_lang.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            onClick={gptSearch}
            className="text-white  mx-2 md:mx-4 bg-red-600 rounded-md px-5 py-2 md:px-7 h-14"
          >
            {gptbtn ? "Home Page" : "GPT Search"}
          </button>
          
          <img
            id="dropdownDefaultButton"
            className="hidden md:inline-block w-12 h-14 cursor-pointer"
            src={userpic}
            onClick={toggleDropdown}
          />

          {isDropdownOpen && (
            <div className="absolute bg-[#333333] text-slate-400 mt-14 w-60 right-2 p-2 rounded-lg shadow-lg">
              <ul>
                <div className="">Hey {user?.displayName?.split(" ")[0] + " !"} 👋 </div>
              </ul>
            </div>
          )}

          <button
            onClick={handleSignout}
            className="text-white mx-2 md:mx-4 bg-blue-600 rounded-md px-5 py-2 md:px-7 h-[58px]"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
