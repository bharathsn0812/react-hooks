import React, { useState } from 'react'

function HookCounterTwo () {
    const initiaCount = 0
    const [count, setCount] = useState(initiaCount)
    return(
        <div>
            <div>Count {count}</div>
            <button onClick={() => {setCount(prevCount => prevCount + 1)}}>Increment By 1</button>
            <button onClick={() => {setCount(prevCount => prevCount - 1)}}>Decrement By 1</button>
            <button onClick={() => {setCount(prevCount => prevCount + 5)}}>Increment By 5</button>
            <button onClick={() => {setCount(initiaCount)}}>Reset</button>
        </div>
    )
}

export default HookCounterTwo