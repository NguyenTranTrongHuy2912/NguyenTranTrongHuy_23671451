import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [searchValue, setSearchValue] = useState(['']);


  const url = 'https://jsonplaceholder.typicode.com/posts';

  useEffect(() => {
    async function fetchData(params) {
      const response = await fetch(url);
      const dataFetch = await response.json();
      setData(dataFetch);
      setFilter(dataFetch);
    }
    fetchData();
  }, [])

  function handleSearch(e) {
    console.log(e.target.value);
    setSearchValue(e.target.value);
    var array = data.filter((item) => {
      return item.title.includes(e.target.value);
    })
    setFilter(array);
  }


  return (
    <>
      <input type="text" name="" id="" value={searchValue} placeholder='Search...' onChange={handleSearch} />
      {
        filter.map((item) => {
          return <div key={item.id}>
            <h2>{item.title}</h2>
            <h2>{item.body}</h2>
          </div>
        })
      }
    </>
  )
}

export default App
