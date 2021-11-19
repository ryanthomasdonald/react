import React from "react";
import Card from "react-bootstrap/Card";

function StarCard(props) {
    return (
        <Card style={{width: '16rem', backgroundColor: "lightgray"}}>
            <Card.Body>
                <Card.Title className="text-center">"{props.title}"</Card.Title>
                <Card.Text className="text-center">
                Released: {props.releaseDate} <br/>
                Rating: {props.rating}/10
                </Card.Text>
                
            </Card.Body>
        </Card>
    );
};

export default StarCard;