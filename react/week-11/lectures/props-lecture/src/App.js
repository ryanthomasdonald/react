import React from "react";
import Button from "./components/Button";
import Days from "./components/Days";
import Dropdown from "./components/Dropdown";
import Days2 from "./components/functional-components/Days";
import ContactList from "./components/ContactList"
import contactData from "./data/contacts";

function App() {
  // let showDays = true;
  return (
    <>
      {/* {showDays ? <Days2 /> : <Days />} */}
      <Button buttonColor="purpleButton" text="I'm purple!" /><br />
      <Button buttonColor="redButton" text="I'm red!" /><br />
      <Button buttonColor="blueButton" text="I'm blue!" /><br />
      <ContactList data={contactData} />
      <Days />
      <Days2 />
      <Dropdown />
    </>
  );
};

export default App;
