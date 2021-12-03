import React, {useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"
import {sampleAction} from "../actions/templateActions"

const Sample = () => {
    const count = useSelector(state => state.templateReducer.count)
    const dispatch = useDispatch()
    // useEffect(() => {          // example of syntax if needed
    //     return () => {
    //         cleanup
    //     }
    // }, [])
    return (
    <>
        <h1>Redux Template</h1>
        <h3>{count}</h3>
        <button onClick={() => dispatch(sampleAction(1))}>Click To Update Global State</button>
    </>
    )
}

export default Sample