import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { IoInformationCircleOutline } from "react-icons/io5";
import { auth } from "../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKGROUND_IMAGE, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleClick = () => {
    console.log(email.current.value);
    console.log(password.current.value);
    const message = isSignInForm?checkValidData(email.current.value, password.current.value): checkValidData(email.current.value, password.current.value, name.current.value);
     
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              const currentUser = auth.currentUser;
              const {uid, email, displayName, photoURL} = currentUser;
              dispatch(addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL
              }))
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BACKGROUND_IMAGE}
          alt="background-image"
        />
      </div>
      <div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute bg-black/80 w-3/12 m-auto right-0 left-0 mt-36 p-8 rounded text-white "
        >
          <h1 className="font-bold text-3xl py-2 mb-8 w-11/12 m-auto">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              className="block w-11/12 m-auto p-2 my-5 bg-gray-700 rounded "
              type="text"
              placeholder="Full Name"
            ></input>
          )}
          <input
            ref={email}
            className="block w-11/12 m-auto p-2 my-5 bg-gray-700 rounded "
            type="text"
            placeholder="Email address"
          ></input>
          <input
            ref={password}
            className="block w-11/12 m-auto p-2 my-5 bg-gray-700 rounded"
            type="password"
            placeholder="password"
          ></input>
          {errorMessage && (
            <span className="inline-flex w-11/12 mx-auto p-2 text-red-700">
              <IoInformationCircleOutline className="text-2xl" />
              <p className="ml-2">{errorMessage}</p>
            </span>
          )}
          <button
            onClick={handleClick}
            className="block w-11/12 m-auto p-2 bg-red-600 mt-12 mb-6 font-semibold rounded  hover:bg-red-800"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <h4 className="text-center hover:underline hover:cursor-pointer">
            Forgot password?
          </h4>
          <div className="my-4 w-11/12 m-auto">
            <input
              className="hover:cursor-pointer size-6 indeterminate:bg-gray-300"
              type="checkbox"
            ></input>
            <h4 className="inline-block align-top pl-2 ml-2">Remember me</h4>
          </div>
          <div className="w-11/12 m-auto">
            <span className="text-neutral-300 text-md">New to neflix?</span>
            <span
              onClick={toggleSignIn}
              className="pl-1 hover:cursor-pointer hover:underline"
            >
              {isSignInForm ? "Sign Up Now" : "Sign In Now"}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
