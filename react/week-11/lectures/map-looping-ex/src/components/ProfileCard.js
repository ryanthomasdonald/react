import React from "react";
import Card from "react-bootstrap/Card";

function ProfileCard(props) {
    return (
        <Card style={{width: '16rem', backgroundColor: "lightgray"}}>
            <Card.Body>
                <Card.Title className="text-center">{props.fName} {props.lName}</Card.Title>
                <Card.Text className="text-center">
                {props.title}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ProfileCard;