import React, { Component } from "react"

class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <ul>
                    <li>{this.props.link1}</li>
                    <li>{this.props.link2}</li>
                    <li>{this.props.link3}</li>
                </ul>
            </div>
        )
    }
}

export default Navbar