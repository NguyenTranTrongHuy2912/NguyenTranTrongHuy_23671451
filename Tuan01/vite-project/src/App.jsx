import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCart from './components/ProductCart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ProductCart></ProductCart>
    </div>
  )
}

export default App
