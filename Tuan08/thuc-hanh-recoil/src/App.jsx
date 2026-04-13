import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { height, width, area, cart } from './recoil/Atoms'
import { useRecoilState, useRecoilValue } from 'recoil'

function App() {
  const [count, setCount] = useState(0)

  var [h, setH] = useRecoilState(height);
  var [w, setW] = useRecoilState(width);
  var a = useRecoilValue(area);
  var [myCart, setMyCart] = useRecoilState(cart);

  console.log(myCart)
  function handleChangeHeight() {
    setH(h + 1)
  }

  function handleChangeWidth(){
    setW(w + 1)
  }

  function handleAddToCart(){
    setMyCart([...myCart,{id: Date.now(), name: 'Product', quantity: '1'}])
  }

  return (
    <>
      <div>
        <h2>Height: {h}</h2>
        <h2>Width: {w}</h2>
        <h2>Area: {a}</h2>
        <div>
          <button onClick={handleChangeHeight}>Change height</button>
          <button onClick={handleChangeWidth}>Change height</button>
        </div>
      </div>
      <br />
      <button onClick={handleAddToCart}>Add To Cart</button>
      {
        myCart.map((item)=>{
          return <div key={item.id}>
            <h2>{item.name}</h2>
            <h2>{item.quantity}</h2>
            <h2>{item.price}</h2>
          </div>
        })
      }
    </>
  )
}

export default App
