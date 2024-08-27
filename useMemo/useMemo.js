import React, { useMemo, useState } from 'react';

function ExpensiveCalculation({ number }) {
  const expensiveResult = useMemo(() => {
    console.log('Calculating...');
    return number * number * number;
  }, [number]);

  return <div>Result: {expensiveResult}</div>;
}

function App() {
  const [number, setNumber] = useState(1);
  const [count, setCount] = useState(0);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <ExpensiveCalculation number={number} />
      <button onClick={() => setCount(count + 1)}>
        Increment count: {count}
      </button>
    </div>
  );
}

export default App;