import React, { useEffect, useState } from 'react'

function hookCounterTwo () {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        document.title = `You clicked ${count} times`
    }, [count])

    return(
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => {setCount(count + 1)}}>Count {count}</button>
        </div>
    )
}

export default hookCounterTwo

/*
  We are trying to change title of DOM form useEffect
  if we don't pass count in dependent variable "count" in useEffect then it will run everytime a state changed even for name state
  running useEffect for every state change will degrade the performance
*/