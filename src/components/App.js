import React, { useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(null);
  const increment = () => {
    setCount(num ? count + num : count + 1);
  };
  const decrement = () => {
    setCount(num ? count + num : count - 1);
  };
  return [increment, decrement, count, setNum];
};
const App = () => {
  const [increment, decrement, count, setNum] = useCounter();
  return (
    <div>
      <button onClick={() => decrement()}> Minus</button>
      <input onChange={(e) => setNum(Number(e.target.value))}></input>
      <button onClick={() => increment()}>Plus</button>
      <br></br>
      {count}
    </div>
  );
};

export default App;
