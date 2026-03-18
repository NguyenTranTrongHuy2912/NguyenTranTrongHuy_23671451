import { useRecoilValue } from "recoil";
import { counterState } from "../recoil/counterState";

function Child2() {
  const count = useRecoilValue(counterState);

  return (
    <div>
      <h2>Child 2</h2>
      <p>Count: {count}</p>
    </div>
  );
}

export default Child2;