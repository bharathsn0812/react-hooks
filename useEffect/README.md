# useEffect
The Effect Hook lets you perform side effects in functional components

It is a close replacement to componentDidMount, componentDidUpdate and componentWillUnmount

## code redabality
This helps in grouping similar code in one block instead of having multiple statements in various lifecycle function

## What is side effects
In React, a "side effect" refers to any operation or action that affects something outside the scope of the current function. This includes things like data fetching, subscriptions, or manually changing the DOM. Side effects are different from calculations or rendering logic that solely depend on the component’s state and props. Managing side effects properly is crucial for maintaining predictable and testable code.

Common Examples of Side Effects in React:

    Fetching Data from an API: Making HTTP requests to fetch data and then updating the component’s state with the fetched data.

    Setting Up Subscriptions or Event Listeners: Adding event listeners to the window or DOM elements, or subscribing to data streams.
    
    Manipulating the DOM Directly: Updating the DOM manually outside the normal React rendering process.
    
    Timers: Setting up intervals or timeouts to perform actions periodically or after a delay.