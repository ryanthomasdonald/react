import React, { Component } from "react";

class Dropdown extends Component {
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
            <select name="" id="">
                <option value="">Select a day</option>
                {days.map(day => <option key={day} value={day}>{day}</option>)}
            </select>
            </>
        )
    }
}

export default Dropdown;