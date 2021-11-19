import React from "react"
import {useNavigate} from "react-router-dom"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

function Issue(props) {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/issue/${props.data.number}`)
    }
    return (
        <>
        <Card style={{ width: '80%' }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
                <Card.Title><h3>{props.data.title}</h3></Card.Title>
                <Card.Text>
                Issue Num: {props.data.number}<br />
                Created {props.data.created_at} days ago by {props.data.user.login}
                </Card.Text>
                <Button onClick={handleClick} variant="warning">Go To Issue</Button>
            </Card.Body>
        </Card>
        <br />
        <br />
        </>
    );
}

export default Issue;
