import React, { useEffect, useState } from 'react'

function hookCounterFour () {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)

        return () => {
            console.log("component unmounting")
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])

    return(
        <div>
            Hooks X - {x} Y - {y}
        </div>
    )
}

export default hookCounterFour

/*
    This is a cleanup for hookCounterThree
    where we are removing listener before component unmount

    what ever we pass in return statement of useEffect will execute during componentWillUnmount lifecycle
*/