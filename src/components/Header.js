import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaSignOutAlt } from "react-icons/fa";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO } from "../utils/constants";
import { toggleGptSearch } from "../utils/GptSlice";
import { SUPPORTED_LANGS } from "../utils/i18nConstants";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

const Header = () => {
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store?.gpt?.showGptSearch);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

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
  }, [dispatch, navigate]);

  const handleGptSearch = () => {
    dispatch(toggleGptSearch());
  };

  const onChangeLanguage = (e) => {
    console.log(e.target.value);
    i18next.changeLanguage(e.target.value);
    localStorage.setItem('selectedLanguage', e.target.value);
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {});
  };

  return (
    <div className="py-2 w-screen px-6 absolute bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-48 " src={NETFLIX_LOGO} alt="Logo" />
      <div className="flex">
        <select
          className="px-2 m-4 py-2 rounded-lg bg-gray-900 text-white"
          onChange={onChangeLanguage}
          value={localStorage.getItem("selectedLanguage") || "en"}
        >
          {SUPPORTED_LANGS.map((lang) => (
            <option key={lang.id} value={lang.id}>
              {lang.name}
            </option>
          ))}
        </select>
        {user && (
          <div className="flex">
            <button
              onClick={handleGptSearch}
              className="px-4 py-2 m-4 bg-green-700 text-white rounded-lg"
            >
              {!showGptSearch
                ? t("header.gptSearch")
                : t("header.browseMovies")}
            </button>
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
    </div>
  );
};

export default Header;
