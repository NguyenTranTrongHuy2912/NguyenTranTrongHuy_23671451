import React from 'react'
import { useRecoilState, useResetRecoilState } from 'recoil'
import CounterAtom from '../atom/CounterAtom';

function ComponentB() {

    var [value, setValue] = useRecoilState(CounterAtom);
    var resetValue = useResetRecoilState(CounterAtom);

    function handleIncrease() {
        setValue(value + 1);
    }

    function handleDecrease() {
        setValue(value - 1);
    }

    function handleReset() {
        resetValue();
    }

    return (
        <div>
            <button onClick={handleIncrease}>Increase value</button>
            <button onClick={handleDecrease}>Decrease value</button>
            <button onClick={handleReset}>Reset value</button>

        </div>
    )
}

export default ComponentB
