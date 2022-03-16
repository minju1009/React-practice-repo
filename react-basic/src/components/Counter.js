import React from "react";
import { useState } from 'react';
import "./Counter.scss";
import OddEvenResult from "./OddEvenResult";

function Counter({props}) {

  const [count, setCount] = useState(7);

  const addNumbers = () => {
    setCount(count + 1)
  }

  const subtractNumbers = () => {
    setCount(count - 1)
  }

  return (
    <div className="counter">
      <header>React Counter</header>
      <h1>{count}</h1>
      <button onClick={addNumbers}>+</button>
      <button onClick={subtractNumbers}>-</button>
      <br />
      <OddEvenResult count={count} />
    </div>
  );
}

Counter.defaultProps = {
  initialValue: 100,
}

export default Counter;