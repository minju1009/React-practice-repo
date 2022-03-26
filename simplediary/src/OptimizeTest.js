import React, { useState, useEffect } from 'react';

const OptimizeTest = () => {
  const Countview = ({ count }) => {
    return <div>{count}</div>;
  };

  const Textview = ({ text }) => {
    return <div>{text}</div>;
  };

  const [count, setCount] = useState(1);
  const [text, setText] = useState('');
  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>count</h2>
        <Countview count={count} />
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <h2>text</h2>
        <Textview text={text} />
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div>
    </div>
  );
};

export default OptimizeTest;
