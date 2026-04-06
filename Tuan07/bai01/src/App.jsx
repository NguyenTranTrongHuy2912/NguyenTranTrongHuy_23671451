import { use, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import CounterAtom from './atom/CounterAtom'
import { useRecoilValue } from 'recoil'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import ThemeAtom from './atom/ThemeAtom'
import ChangeTheme from './components/ChangeTheme'

function App() {
  var value = useRecoilValue(CounterAtom);
  const theme = useRecoilValue(ThemeAtom);
  console.log(value);

  return (
    <div className={`${theme}-theme`}>
      <h2>Bai 1</h2>
      Gia tri trong atom: {value}
      <ComponentA />
      <ComponentB />
      <br />
      <h2>Bai 2</h2>
      <ChangeTheme />
    </div>
  )
}

export default App
