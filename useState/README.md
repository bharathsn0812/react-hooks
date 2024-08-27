# What triggers re-rendering of component
In React.js, re-rendering of a component is triggered when one or more of the following occur:

    State Changes:
        Whenever a component’s state is updated using setState (in class components) or useState (in functional components), React will trigger a re-render to reflect the new state.

    Props Changes:
        When the props passed to a component change, React will re-render that component to reflect the new props.

    Parent Component Re-renders:
        If a parent component re-renders, all of its child components will also re-render, unless shouldComponentUpdate (in class components), React.memo (in functional components), or PureComponent (for class components) are used to optimize rendering.

    Force Update:
        Calling the forceUpdate method (available only in class components) will force a component to re-render.