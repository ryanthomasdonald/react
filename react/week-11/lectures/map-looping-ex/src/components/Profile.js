import React from "react";
import Card from "./ProfileCard"

function Profile({data}) {
    return (
        <div className="row d-flex justify-content-center">
        {data.map((person, index) => {
            return (
                <div className="col-4 p-0 g-0">
                    <Card key={index}
                    fName={person.name.first} 
                    lName={person.name.last}
                    title={person.title}/>
                </div>
            )
        })}
        </div>
    );
};

export default Profile;