import React from "react";
import Card from "./ContactCard";

function ContactList({data}) {
    // data is an array of objects
    return (
        <>
        {data.map((contact, index) => {
            return (
                <div>
                    <Card key={index}
                    imgURL={contact.imgURL}
                    name={contact.name}
                    phone={contact.phone}
                    email={contact.email} />
                </div>
            )
        })}
        </>
    );
};

export default ContactList;