import React from "react";

function Button(props) {
    return (
        <>
            <button className={props.buttonColor}>{props.text}</button>
        </>
    );
};

export default Button;