import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaSignOutAlt } from "react-icons/fa";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO } from "../utils/constants";

const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //console.log(user);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
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
        dispatch(removeUser());
         navigate("/");
      }
    });

    return () => unSubscribe();
  }, [dispatch,navigate]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        
      })
      .catch((error) => {
        
      });
  };

  return (
    <div className="py-2 w-screen px-6 absolute bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-48 "
        src= {NETFLIX_LOGO}
        alt="Logo"
      />
      {user && (
        <div className="flex">
          <img
            className="m-4 w-12 h-12 rounded-md"
            src={user?.photoURL}
            alt="user-logo"
          />
          <button
            onClick={handleSignOut}
            className="font-bold text-red-800 text-3xl"
          >
            <FaSignOutAlt />
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
