import React, {useState} from "react";    // useState is a React hook (remember comma and curly bois)

function CounterFunc() {
    const [count, setCount] = useState(0)
    // count = 0
    // setCount = function
    // onClick = () => {
    //     return setCount(count + 1)
    // }
    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button><br />
            <button onClick={() => setCount(count - 1)}>Decrement</button><br />
            <button onClick={() => setCount(0)}>Reset</button><br />
        </>
    );
};

export default CounterFunc;