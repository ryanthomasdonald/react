import React from "react"
import Header from "./Header"
import Footer from "./Footer"

// props are passed down from index.js
function BaseLayout(props) {
    return (
        <>
        <Header /><br /><br />
        {props.children}<br /><br />
        <Footer />
        </>
    );
}

export default BaseLayout;
