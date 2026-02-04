import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseStateHook from './components/UseStateHook'
import UseEffectHook from './components/UseEffectHook'
import UseReducerHook from './components/UseReducerHook'
import UseRefHook from './components/UseRefHook'
import UseMemoHook from './components/UseMemoHook'
import UseCallbackHook from './components/UseCallbackHook'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ display: "flex", gap: "20px" }} >
        <UseStateHook />
        <UseEffectHook />
        <UseReducerHook />
        <UseRefHook />
        <UseMemoHook />
        <UseCallbackHook />
      </div>

    </>
  )
}

export default App
