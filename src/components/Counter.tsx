import React, { useState } from 'react'

import classes from './Counter.module.sass';

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const onIncrement = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <h1>Counter: {count}</h1>
      <button className={classes.btn} onClick={onIncrement}>Increment</button>
    </>
  )
};