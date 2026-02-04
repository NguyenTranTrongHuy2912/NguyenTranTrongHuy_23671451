import React, { useMemo, useState } from 'react'

function UseMemoHook() {
    const [count, setCount] = useState(0);
    const [wordIndex, setWordIndex] = useState(0);
    const words = ["ReactJS", "NodeJS", "Angular", "VueJS", "Django"];

    const word = useMemo(() => {
        console.log("Tính toán từ mới");
        return words[wordIndex].toUpperCase();
    }, [wordIndex]);

    return (
        <div className='p-4 border'>
            <h3>5. useMemo</h3>
            <p>Từ hiện tại: {word}</p>
            <button onClick={() => setWordIndex((wordIndex + 1) % words.length)}>Đổi từ</button>
            <button onClick={() => setCount(count + 1)}>Render lại component</button>
        </div>

    )
}

export default UseMemoHook