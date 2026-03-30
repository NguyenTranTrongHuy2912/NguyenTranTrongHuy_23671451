import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import NotFound from './components/NotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <Link to='/'>Home</Link> |
        <Link to='/contact'>Contact</Link> |
        <Link to='/about'>About</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </>
  )
}

export default App
