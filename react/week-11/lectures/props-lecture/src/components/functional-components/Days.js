import React from "react";

function Days(props) {
    const styles = {
        color: "purple",
        fontSize: "20px"
    }
    let days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];
    return (
        // style is a prop, note CSS syntax for OBJECT ABOVE, inline JSX styling takes TWO sets of curly bois
        <ul style={styles}>
            {days.map(day => <li key={day}>{day}</li>)}
        </ul>
    );
};

export default Days;