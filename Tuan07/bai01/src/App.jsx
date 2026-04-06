import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import CounterAtom from './atom/CounterAtom'
import { useRecoilValue } from 'recoil'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'

function App() {
  const [count, setCount] = useState(0)
  var value = useRecoilValue(CounterAtom);
  console.log(value);
  return (
    <>
      <div>
        Gia tri trong atom: {value}
        <ComponentA />
        <ComponentB />
      </div>
    </>
  )
}

export default App
