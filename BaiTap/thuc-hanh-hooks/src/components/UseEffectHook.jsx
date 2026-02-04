import React, { useState, useEffect } from 'react'

function UseEffectHook() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds(s => s + 1);
        }, 1000);

        return () => clearInterval(timer);
    }, []);
  return (
    <div>
        <h3>2. useEffect</h3>
        <p>Đã chạy được {seconds} giây</p>
    </div>
  )
}

export default UseEffectHook