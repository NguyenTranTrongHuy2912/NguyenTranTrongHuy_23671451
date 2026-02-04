import React, { useCallback, useState } from 'react'

function UseCallbackHook() {
    const [count, setCount] = useState(0);

    const handleAlert = useCallback(() => {
        alert("Giá trị hiện tại của count: " + count);
    }, [count]);

    return (
        <div className='p-4 border'>
            <h3>6. useCallback</h3>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Tăng Count</button>
            <button onClick={handleAlert}>Hiển thị thông báo</button>
        </div>
    )
}

export default UseCallbackHook