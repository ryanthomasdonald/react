import React, { Component } from "react"

class Friend extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.fName} {this.props.lName} {this.props.age}</h2>
            </div>
        )
    }
}

// OR:
// function Friend(props) {     // must pass "props" into function, but "this" is not needed
//     return (
//         <div>
//             {props.fName} {props.lName}
//         </div>
//     )
// }

export default Friend