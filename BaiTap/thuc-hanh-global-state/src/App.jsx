import React from "react";

// import { useRecoilState } from "recoil";                //recoil
// import { counterState } from "./recoil/counterState";   //recoil

import { useDispatch, useSelector } from "react-redux";     //redux
import { increment } from "./redux/counterSlice";         //redux
import Child1 from "./components/Child1";
import Child2 from "./components/Child2";

function App() {
  // const [count, setCount] = useRecoilState(counterState); // recoil

  const dispatch = useDispatch();                             // redux
  const count = useSelector((state) => state.counter.value); // redux

  return (
    /* Recoil */
    // <div style={{ textAlign: "center" }}>
    //   <h1>Recoil Counter App</h1>

    //   <button onClick={() => setCount(count + 1)}>
    //     Tăng giá trị
    //   </button>

    //   <Child1 />
    //   <Child2 />
    // </div>

    /* Redux */
    <div style={{ textAlign: "center" }}>
      <h1>Redux Toolkit Counter</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => dispatch(increment())}>
        Tăng giá trị
      </button>

      <Child1 />
      <Child2 />
    </div>
  );
}

export default App;