import React from "react";
import Card from "./StarCard"

function StarRating({data}) {
    return (
        <div className="row d-flex justify-content-center">
        {data.map(movie => {
            return (
                <div className="col-4 p-0 g-0">
                    <Card key={movie.id}
                    title={movie.title}
                    releaseDate={movie.releaseDate}
                    rating={movie.rating}/>
                </div>
            )
        })}
        </div>
    );
};

export default StarRating;