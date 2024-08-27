import React, { useEffect, useState } from 'react'

function hookCounterFour () {
    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(prevCount => prevCount + 1)
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [count])
}

export default hookCounterFour

/*
If you think dependency array is a way to specify when you want to rerun the effect, you are going to run into problems. Instead, dependency array should be thought of as a way to let react know about everything that the effect must watch for changes.
*/