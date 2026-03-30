import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import Orders from './components/Orders'
import Profile from './components/Profile'
import Settings from './components/Settings'
import NotFound from './components/NotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <Link to='/'>Home</Link> |
        <Link to='/dashboard'>Dashboard</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/dashboard' element={<Dashboard />}> 
          <Route path='orders' element={<Orders/>}></Route>
          <Route path='profile' element={<Profile/>}></Route>
          <Route path='settings' element={<Settings/>}></Route>
        </Route>
        <Route path='*' element={<NotFound/>}></Route>

      </Routes>
    </>

  )
}

export default App
