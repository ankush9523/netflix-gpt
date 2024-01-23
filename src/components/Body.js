import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import Test from "./Test";

function Body() {
  
  
  //const navigate = useNavigate();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path:"/test",
      element:<Test/>
    }
  ]);
  
  {/*useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // user signed in then
        const {uid,email,displayName,photoURL} = user;

       dispatch(addUser({uid:uid , email: email, displayName : displayName , photoURL : photoURL}));
       //navigate("/browse");
    
      } else {
        //user signedout then
         dispatch(removeUser());
        // navigate("/");
      }
    });
  }, []); */}

  return (
    <>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </>
  );
}

export default Body;
