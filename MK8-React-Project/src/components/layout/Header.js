import React from "react"
import {Link} from "react-router-dom"

const Header = () => {
    return (
    <>
        <Link to="/">Home Page</Link><br />
        <Link to="/sample">Redux Template Button</Link>
    </>
    )
}

export default Header