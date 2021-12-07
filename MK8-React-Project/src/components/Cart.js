import React, {useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"
import {sampleAction} from "../actions/builderActions"

const Cart = () => {
    // const count = useSelector(state => state.templateReducer.count)
    const dispatch = useDispatch()
    // useEffect(() => {          // example of syntax if needed
    //     return () => {
    //         cleanup
    //     }
    // }, [])
    return (
    <>
        <h1>Redux Template</h1>
    </>
    )
}

export default Cart