import React, { useContext, useState } from "react";
import { ThemeContext } from "../App";

function CounterHook({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  const style = useContext(ThemeContext);
  return (
    <>
      <div>
        <h1>Counter</h1>
        <p>{count}</p>
        <button style={style} onClick={() => setCount((pre) => pre + 1)}>
          Increment
        </button>
        <button
          style={style}
          onClick={() =>
            setCount((pre) => {
              return pre - 1;
            })
          }>
          Decrement
        </button>
      </div>
    </>
  );
}

export default CounterHook;
