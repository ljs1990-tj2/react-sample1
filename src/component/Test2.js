import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [updateCount, setUpdateCount] = useState(1);

  const increment = () => {
    setCount(prev => prev + Number(updateCount));
  };

  const decrement = () => {
    setCount(prev => Math.max(prev - Number(updateCount), 0));
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <div>현재 카운트: {count}</div>
      <input type="number" value={updateCount} onChange={(e) => {
        setUpdateCount(e.target.value)
      }}/>
      <div>
        <button onClick={increment}>증가</button>
        <button onClick={decrement}>감소</button>
        <button onClick={reset}>초기화</button>
      </div>
    </div>
  );
}

export default App;
