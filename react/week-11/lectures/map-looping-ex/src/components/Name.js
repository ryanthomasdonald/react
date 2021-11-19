import React from "react";

function Name(props) {
    const fullNames = [
        { first: 'Bruce', last: 'Banner' },
        { first: 'Carol', last: 'Danvers' },
        { first: 'Thor', last: 'Odinsson' },
        { first: 'Natasha', last: 'Romanov' },
        { first: 'Wanda', last: 'Maximoff' },
        { first: 'Tony', last: 'Stark' },
        { first: 'Sam', last: 'Wilson' },
        ]
    return (
        <ul>
        {fullNames.map((fullName, index) => {
            return <li key={index}>{fullName.first} {fullName.last}</li>
        })}
        </ul>
    );
};

export default Name;