import { useRecoilValue } from "recoil";
import { counterState } from "../recoil/counterState";
import { useSelector } from "react-redux";

function Child2() {
    //   const count = useRecoilValue(counterState);
    const count = useSelector((state) => state.counter.value);
    return (
        <div>
            <h2>Child 2</h2>
            <p>Count: {count}</p>
        </div>
    );
}

export default Child2;