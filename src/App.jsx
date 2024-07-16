import React, { useState } from "react";
import Counter from "./script/Counter";
import CounterHook from "./script/CounterHook";

export const ThemeContext = React.createContext();

function App() {
  const [theme, themeState] = useState("red");

  return (
    <ThemeContext.Provider value={{ color: theme }}>
      <Counter initial={10} />
      <CounterHook initialCount={10} />

      <button
        onClick={() =>
          themeState((pre) => {
            return pre === "red" ? "blue" : "red";
          })
        }>
        theme-change
      </button>
    </ThemeContext.Provider>
  );
}

export default App;
