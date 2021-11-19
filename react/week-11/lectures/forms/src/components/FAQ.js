import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function FAQ() {
    const {faqID} = useParams()
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/")
    }
    return (
        <>
        <h1>FAQ</h1>
        <h1>{faqID}</h1>
        <button onClick={handleClick}>Home</button>
        </>
    );
};

export default FAQ;