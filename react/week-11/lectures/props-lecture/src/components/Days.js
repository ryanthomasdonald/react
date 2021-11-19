import React, { Component } from "react";

class Days extends Component {
    render() {
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
            <>
            <ul>
                {days.map(day => <li key={day}>{day}</li>)}
            </ul>
            </>
        )
    }
}

export default Days;