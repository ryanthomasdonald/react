import React, {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

function IssueDetail() {
    const {issueID} = useParams()
    const [userIssue, setUserIssue] = useState([])
    useEffect(() => {
        const userFetch = async () => {
            let response = await fetch(`https://api.github.com/repos/facebook/create-react-app/issues/${issueID}`)
            let data = await response.json()
            setUserIssue(data)
        }
        userFetch()
    }, [])
    console.log(userIssue)
        return (
            <>
            <Card style={{ width: '80%' }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                    <Card.Title><h3>{userIssue.title}</h3></Card.Title>
                    <Card.Text>
                    Issue num: {userIssue.number}<br />
                    Created {userIssue.created_at} days ago by
                    </Card.Text>
                    <Button variant="primary">User Profile</Button>
                </Card.Body>
            </Card>
            <br />
            <br />
            </>
        )
}

export default IssueDetail;
