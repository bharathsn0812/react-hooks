import React, { useState } from 'react'

function HookCounter () {
    const [count, setCount] = useState(0)
    return(
        <div>
            <button onClick={() => {setCount(count + 1)}}>Count {count}</button>
        </div>
    )
}

export default HookCounter

/*
State Management: useState allows you to add state to functional components, enabling you to track and manage dynamic data within your component.

Simplicity: It provides a simple API for state management, making it easy to understand and use, especially for those new to React or functional programming.

Reactivity: Changes to state variables using useState trigger re-renders of the component, ensuring the UI stays in sync with the latest data.

Local State: useState is ideal for managing local component state, such as form inputs, toggles, and other interactive elements, without affecting other parts of the application.

Hook Integration: It integrates seamlessly with other React hooks, like useEffect for side effects and useContext for context management, allowing for a powerful and flexible component design.

Function Component Paradigm: With useState, you can leverage the benefits of functional components, such as easier testing, reduced boilerplate code, and better performance due to the absence of lifecycle methods.

Readability and Maintainability: useState promotes cleaner and more maintainable code by reducing the need for complex class components and making state-related logic more straightforward and declarative.
*/