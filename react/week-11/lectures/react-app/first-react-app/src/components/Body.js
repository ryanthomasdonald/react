import React, { Component } from "react"
import Searchbar from "./Searchbar"

class Body extends Component {
    render() {
        let city = "Atlanta"
        let arr = [1, 2, 3, 4, 5]
        let {info} = this.props
        return (
            <div className="Body">
                <h2>{city}</h2>
                <h2>{4 + 5}</h2>
                <h1>{info}</h1>
                {arr.map(num => {
                    return <h2>{num}</h2>
                })}
                <Searchbar />
                <h1>This is the body component.</h1>
            </div>
        )
    }
}

export default Body