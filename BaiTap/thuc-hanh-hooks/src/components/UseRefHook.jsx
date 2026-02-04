import React, { useRef } from 'react'

function UseRefHook() {
    const inputRef = useRef(null);
    const focusInput = () => {
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = 'black';
    }
  return (
    <div className='p-4 border'>
        <h3>4. useRef</h3>
        <input type="text" ref={inputRef} placeholder="Click nút để focus..." />
        <br />
        <button onClick={focusInput}>Focus Input</button>
    </div>
  )
}

export default UseRefHook