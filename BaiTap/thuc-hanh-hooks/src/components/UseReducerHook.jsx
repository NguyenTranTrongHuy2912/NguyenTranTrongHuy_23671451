import React, { useReducer } from 'react'

const reducer = (state, action) => {
    if (action === 'UP') return state + 1;
    if (action === 'DOWN') return state - 1;
    return state;
};

function UseReducerHook() {
    const [count, dispatch] = useReducer(reducer, 0);


    return (
        <div className="p-4 border">
            <h3>3. useReducer</h3>
            <p>Số lượng: {count}</p>
            <button onClick={() => dispatch('UP')}>Tăng</button>
            <button onClick={() => dispatch('DOWN')}>Giảm</button>
        </div>
    )
}

export default UseReducerHook