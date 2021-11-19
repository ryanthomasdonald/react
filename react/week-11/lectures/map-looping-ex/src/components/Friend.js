import React from "react";

function Friend(props) {
    const friends = [
        'Bob',
        'Linda',
        'Tina',
        'Louise',
        'Gene',
        ]
    return (
        <ul>
        {friends.map((friend, index) => {
            return <li key={index}>{friend}</li>
        })}
        </ul>
    );
};

export default Friend;