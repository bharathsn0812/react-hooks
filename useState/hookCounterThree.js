import React, { useState } from 'react'

function HookCounterThree () {
    const [name, setName] = useState({ firstName: "", lastName: ""})
    return(
        <form>
            <input
                type="text"
                value={name.firstName}
                onChange={e => setName({...name, firstName : e.target.value })}
            />
            <input
                type="text"
                value={name.lastName}
                onChange={e => setName({...name, lastName : e.target.value })}
            />
            <h2>Your first name is {name.firstName}</h2>
            <h2>Your last name is {name.lastName}</h2>
            <h2>{JSON.stringify(name)}</h2>
        </form>
    )
}

export default HookCounterThree

/*
In React, we often need to manually merge state updates when dealing with objects or arrays because the state updater functions (like setName in your example) do not automatically merge state updates for complex data structures. They replace the existing state with the new state entirely. Here’s why this is the case and why manual merging is necessary:
Reasons for Manual Merging

State Immutability:
    React state should be treated as immutable. This means you shouldn't modify the existing state object directly but should create a new object with the updated values. This immutability allows React to efficiently determine when and what parts of the component tree need to be re-rendered.

Shallow Merging:
    The useState and setState functions in React do not perform deep merges. When you update the state, React will replace the entire state object with the new one you provide. If you only provide a partial update without merging, the other properties in the state object will be lost.
*/