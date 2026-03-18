import { useRecoilValue } from "recoil";
import { counterState } from "../recoil/counterState";

function Child1() {
  const count = useRecoilValue(counterState);

  return (
    <div>
      <h2>Child 1</h2>
      <p>Count: {count}</p>
    </div>
  );
}

export default Child1;