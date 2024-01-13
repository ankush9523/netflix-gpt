import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {signOut} from 'firebase/auth';
//import {auth} from '../utils/firebase';
//import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
//import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";


function Header() {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // user signed in then
        const {uid,email,displayName,photoURL} = user;

       dispatch(addUser({uid:uid , email: email, displayName : displayName , photoURL : photoURL}));
       navigate("/browse");
    
      } else {
        //user signedout then
         dispatch(removeUser());
         navigate("/");
      }
    });
  }, []);

  function handleSignOut(){
    signOut(auth).then(() => {
      console.log("sign out ....");
      dispatch(removeUser);
      navigate("/");
    }).catch((error) => {
      console.log(error);
      // An error happened.
    })
  }
  return (
    <div className="  absolute w-full  px-8 py-2 bg-gradient-to-b from-black z-50  flex justify-between">
      <img
      className="w-44 mx-10"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      <div className="flex">
        
        
        {user ? 
        <><img  className=" h-6" src={user.photoURL} alt="userLogo" />
        <h4 className="text-white font-semibold z-50">{user.displayName}</h4>
          <button className=" bg-red-600 px-3 py-1 m-4 font-semibold text-white rounded-sm " onClick={handleSignOut}>
          Sign Out
        </button></>
        : null}
      </div>
      
    </div>
  );
}

export default Header;
