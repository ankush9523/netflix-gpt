import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { banner } from "../utils/constant";

function Login() {
 
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  function toggleSignInForm() {
    setIsSignInForm(!isSignInForm);
  }
  function handleButtonClick() {
    checkValidData(email.current.value, password.current.value);
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (!message) {
      //sign up logic
      if (!isSignInForm) {
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            const user = userCredential.user;

            updateProfile(user, {
              displayName: name.current.value , photoURL: "https://avatars.githubusercontent.com/u/109617293?s=400&v=4",
            }).then(() => {
               
               const {uid,email,displayName,photoURL} = auth.currentUser;
       dispatch(addUser({uid:uid , email: email, displayName : displayName , photoURL : photoURL}));
               //navigate("/browse");
            }).catch((error) => {
              setErrorMessage(error .message);
            }); 
            

            
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "--" + errorMessage);
          });
      }
      //sign in logic
      else {
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            const user = userCredential.user;
            //navigate("/browse");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "--" + errorMessage);
          });
      }
    }
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="h-screen w-screen object-cover"
          src={banner}
          alt="banner"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" w-full md:w-4/12 text-white p-4 md:p-12 bg-black absolute my-24 md:my-36 mx-auto right-0 left-0 bg-opacity-85 rounded-md"
      >
        <h1 className="font-bold text-3xl px-2 py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm ? (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 m-2 w-full  bg-gray-800 rounded-sm"
          />
        ) : null}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 m-2 w-full bg-gray-800 rounded-sm"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 m-2 w-full  bg-gray-800 rounded-sm"
        />

        <p className=" text-red-500  font-semibold px-2 py-2">{errorMessage}</p>

        <button
          className="p-2 m-2 bg-red-700 w-full rounded-sm"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <div className=" flex  justify-between">
        <div className="flex">
          <input type="checkbox" className=" w-8" />
          <p className=" text-gray-300 text-xs">Remember me </p>
          </div>
          <p className=" text-gray-300 text-xs">Need help?</p>
        </div>
        

        <p className="py-16 px-2 text-gray-400">
          {" "}
          {isSignInForm ? "New To Netflix?" : "Already registered?"}{" "}
          <span
            onClick={toggleSignInForm}
            className="text-white cursor-pointer"
          >
            {isSignInForm ? "Sign Up Now." : "Sign In Now"}
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;
