import React, { useState } from 'react'

function UseStateHook() {
  const [name, setName] = useState("null")
  return (
    <div>
      <h3>1. useState</h3>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="Nhập tên..."
      />
      <p>Xin chào: {name}</p>
    </div>

  )
}

export default UseStateHook