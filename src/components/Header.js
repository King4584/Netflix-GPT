import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser , removeUser } from "../utils/userSlice";

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
    onAuthStateChanged(auth, (user) => {
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
  }, []);

  return (
    <div className="flex justify-between absolute w-full px-8 py-6 z-10 bg-gradient-to-b from-black">
        <img
          className="w-44"
          src="https://imgs.search.brave.com/ZBbMMUhTlxq8zjlbHNC86k8dpzfNuKb9-zoA7QKevbE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8w/LzBjL05ldGZsaXhf/MjAxNF9sb2dvLnN2/Zw.svg"
          alt=" netflix-logo"
        />
        <div className="flex">
          {user && (<>
          {/* <img className="" src={user?.photoURL} alt="icon"/> */}
          <p>Hyy {user?.displayName}</p>
          <button onClick={handleSignOut} className="text-red-600 text-bold text-xl ">Sign Out</button></>)}
        </div>
    </div>
  );
};

export default Header;
