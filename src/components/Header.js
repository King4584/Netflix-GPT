import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser , removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const user= useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [isLogedIn]=useState(false);

  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.

      navigate('/');
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }

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
    return () =>  unsubscribe();
  }, []);

  return (
    <div className="flex justify-between absolute w-full px-8 py-6 z-10 bg-gradient-to-b from-black">
        <img
          className="w-44"
          src= {LOGO}
          alt=" netflix-logo"
        />
        <div className="flex justify-center align-middle h-full gap-6">
          {user && (<>
          {/* <img className="" src={user?.photoURL} alt="icon"/> */}
          <p className="text-black text-bold text-xl ">Hyy {user?.displayName} </p>
          <button onClick={handleSignOut} className="text-red-600 text-bold text-xl "> Sign Out</button></>)}
        </div>
    </div>
  );
};

export default Header;
