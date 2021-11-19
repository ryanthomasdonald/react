import React from "react";

function AdList(props) {
    console.log(props.lang)
    return (
        // <div className="row d-flex justify-content-center m-0 pb-3">
            // <div className="col-4">
            <div>
                <div>
                    <img src="happy-hour.jpg" width="300px" alt="ad" />
                </div>
                <br />
                <h3>Browse By Language</h3>
                {props.lang}
            </div>
            // </div>
        // </div>
    );
};

export default AdList;