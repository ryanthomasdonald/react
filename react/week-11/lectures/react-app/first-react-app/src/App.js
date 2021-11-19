import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Friend from "./components/Friend";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar link1="Home" link2="About Us" link3="Contact Us" />
        <Body info={99} />
        <Friend fName="Victoria" lName="Walker" age={30} />
        <Friend fName="Andrew" lName="Hatch" age={29} />
        <Friend fName="Hunter" lName="Hutchisson" age={28} />
        <Footer />
      </div>
    )
  }
}

export default App