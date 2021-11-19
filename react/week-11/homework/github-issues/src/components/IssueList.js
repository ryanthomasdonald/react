import React, {useEffect, useState} from "react";
import Issue from "./Issue"

function IssueList() {
    const [allIssues, setAllIssues] = useState([])
    useEffect(() => {
        const issueFetch = async () => {
            let response = await fetch("https://api.github.com/repos/facebook/create-react-app/issues")
            let data = await response.json()
            setAllIssues(data)
        }
        issueFetch()
    }, [])
    // console.log(allIssues)
    return (
        <>
        {allIssues.map((issue, index) => {
            return <Issue key={index} data={issue} />
        })}

        </>
    );
}

export default IssueList;
