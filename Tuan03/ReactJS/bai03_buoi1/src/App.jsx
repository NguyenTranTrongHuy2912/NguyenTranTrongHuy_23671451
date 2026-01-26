import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Alert from './components/Alert'

function App() {
  const [type, setType] = useState('success');

  return (
    <>
      <div>
        <button onClick={() => setType('success')}>Success</button>
        <button onClick={() => setType('warning')}>Warning</button>
        <button onClick={() => setType('danger')}>Danger</button>
        <br /><br />
        <Alert type={type}/>
        
      </div>

    </>
  )
}

export default App
