import React, { useEffect, useState } from 'react'

function hookCounterOne () {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `You clicked ${count} times`
    })

    return(
        <div>
            <button onClick={() => {setCount(count + 1)}}>Count {count}</button>
        </div>
    )
}

export default hookCounterOne

/*
  We are trying to change title of DOM form useEffect
  As we are not passing any dependent variables to useEffect, it is run everytime 
*/