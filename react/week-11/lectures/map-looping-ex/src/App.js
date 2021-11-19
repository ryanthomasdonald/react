import React from "react";
import './App.css';
import Friend from "./components/Friend";
import Name from "./components/Name";
import StarRating from "./components/StarRating";
import Profile from "./components/Profile";
import movieData from "./data/movies";
import staffData from "./data/staff";

function App() {
  return (
    <>
    <Friend />
    <Name />
    <StarRating data={movieData} />
    <br />
    <br />
    <Profile data={staffData}/>
    </>
  );
}

export default App;
