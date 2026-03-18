import React from "react";
import { useRecoilState } from "recoil";
import { counterState } from "./recoil/counterState";
import Child1 from "./components/Child1";
import Child2 from "./components/Child2";

function App() {
  const [count, setCount] = useRecoilState(counterState);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Recoil Counter App</h1>

      <button onClick={() => setCount(count + 1)}>
        Tăng giá trị
      </button>

      <Child1 />
      <Child2 />
    </div>
  );
}

export default App;