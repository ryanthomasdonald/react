import React, { Component } from "react";
import PropTypes from "prop-types";

class GreetingClass extends Component {
    render() {
        return (
            <>
                <h1>Howdy, {this.props.name}.</h1>
            </>
        )
    }
}

// outside of class, lowercase "p" then uppercase
GreetingClass.propTypes = {
    name: PropTypes.string
}

GreetingClass.defaultProps = {
    name: "Stranger"
}

export default GreetingClass;