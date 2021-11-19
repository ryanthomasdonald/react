import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ContactCard(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.imgURL} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                {props.phone}
                </Card.Text>
                <Button variant="primary">{props.email}</Button>
            </Card.Body>
        </Card>
    );
};

export default ContactCard;