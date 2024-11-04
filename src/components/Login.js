import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { IoInformationCircleOutline } from "react-icons/io5";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage,setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleClick = () => {
    console.log(email.current.value);
    console.log(password.current.value);
    const message = checkValidData(email.current.value,password.current.value);
    setErrorMessage(message);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/151f3e1e-b2c9-4626-afcd-6b39d0b2694f/web/IN-en-20241028-TRIFECTA-perspective_bce9a321-39cb-4cce-8ba6-02dab4c72e53_large.jpg"
          alt="backgrounf-image"
        />
      </div>
      <div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute bg-black/90 w-3/12 m-auto right-0 left-0 mt-36 p-8 rounded text-white "
        >
          <h1 className="font-bold text-3xl p-2 mb-8 w-11/12 m-auto">
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
          {errorMessage &&<span className="inline-flex w-11/12 mx-auto p-2 text-red-700"><IoInformationCircleOutline className="text-2xl" /><p className="ml-2">{errorMessage}</p></span> }
          <button
            onClick={handleClick}
            className="block w-11/12 m-auto p-2 bg-red-800 mt-12 mb-6 rounded "
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
