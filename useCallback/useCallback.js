import React, { useState, useCallback } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);

  const incrementCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <ChildComponent onClick={incrementCount} />
      <p>Count: {count}</p>
    </div>
  );
}

function ChildComponent({ onClick }) { v 
  console.log('ChildComponent rendered');
  return <button onClick={onClick}>Increment</button>;
}

export default ParentComponent;