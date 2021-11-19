import React from "react"


// props are passed down from index.js
function BaseLayout(props) {
    return (
        <>

        {props.children}

        </>
    );
}

export default BaseLayout;
