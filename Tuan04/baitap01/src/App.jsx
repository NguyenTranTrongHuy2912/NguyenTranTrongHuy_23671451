import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState([])
  var url = "https://jsonplaceholder.typicode.com/users"

  // useEffect(() => {
  //   var res = fetch(url);

  //   res.then((response) => {
  //     return response.json();
  //   }).then((datafetch) => {
  //     setData(datafetch);
  //     return datafetch;
  //   })
  // }, [])

  useEffect(() => {
    async function fetchData(params) {
      var res = await fetch(url);
      var datafetch = await res.json();
      setData(datafetch);
    }
    fetchData();
  }, [])


  return (
    <>
      {
        data.map((item) => {
          return <div key={item.id}>
            <h2>{item.name}</h2>
            <h2>{item.email}</h2>
          </div>
        })
      }

    </>
  )
}

export default App
