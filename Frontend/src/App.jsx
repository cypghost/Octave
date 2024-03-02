import React from "react";
import { useState, useEffect } from "react";
import { redirect } from "react-router-dom";
import "./App.css";
import LoadingSpinner from './Components/LoadingSpinner';
import Button from "./Components/Button";

const App = () => {
   const [isLoading, setIsLoading] = useState(true);
   const [isLoggedIn, setIsLoggedIn] = useState(false);

   useEffect(() => {
     // Fetch authentication status from the backend
     fetch("/user")
       .then((res) => res.json())
       .then((data) => {
         setIsLoggedIn(data.user === true);
         setIsLoading(false);
       })
       .catch((error) => {
         console.error("Error fetching authentication status:", error);
         setIsLoading(false);
       });
   }, []);

   const redirectToSpotify = () => {
     setIsLoading(true);
     window.location.href = "http://localhost:3000/auth/spotify";
   };
  
  if (isLoading) {
    return (
      < LoadingSpinner />
    )
  }

  return (
    <div className="container">
      <div className="buttons-2">
        <p className="welcome">Welcome To Octave</p>
        {isLoggedIn ? (
          redirect('/musiclist')
        ) : (
          <Button name="Sign In" onClick={redirectToSpotify} />
        )}
      </div>
      <p className="slogan">Making music discovery a breeze!</p>
    </div>
  );
};

export default App;
