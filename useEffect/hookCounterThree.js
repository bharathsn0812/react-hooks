import React, { useEffect, useState } from 'react'

function hookCounterThree () {
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
    }, [])

    return(
        <div>
            Hooks X - {x} Y - {y}
        </div>
    )
}

export default hookCounterThree

/*
  We are trying to show X and Y cordinates of mouse pointer
  You can see we are passing empty dependent array in useEffect, it will mimic the lifecycle method componentDidMount
  that is useEffect will be executed only once in components lifetime
*/