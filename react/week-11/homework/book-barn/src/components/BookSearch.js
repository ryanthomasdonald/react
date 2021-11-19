import React from "react";
import Form from "react-bootstrap/Form";
// import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

function BookSearch() {
    return (
        // <div className="row m-0">
        //     <div className="col-8 d-flex justify-content-end p-2">
        <Form>
            <Form.Group className="mb-3" controlId="formSearch">
                <Form.Label>Take a look...</Form.Label>
                <Form.Control type="text" placeholder="It's in a book." />
                <Button variant="warning">Search</Button>
            </Form.Group>
        </Form>
            // <Form>
            //     <div className="form-group">
            //     <label>Take a look:</label>
            //     <input type="search" placeholder="It's in a book..." />
            //     <Button variant="warning">Search</Button>
            //     </div>
            // </Form>
        //     </div>
        // </div>
    );
};

export default BookSearch;