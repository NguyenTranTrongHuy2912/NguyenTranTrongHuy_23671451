import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/button'

function App() {
  return (
    <div>
      <Button type="primary" title="Button Primary" /> <br />
      <Button type="danger" title="Button Danger" /> <br />
      <Button type="success" title="Button Success" /> <br />
      <Button />
    </div>
  )
}

export default App
