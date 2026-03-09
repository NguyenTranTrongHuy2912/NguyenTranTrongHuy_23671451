import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
      try {
        var res = await fetch(url);
        var datafetch = await res.json();
        setData(datafetch);
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false);
      }

    }
    fetchData();

  }, [])


  if (loading) return (<div>Loading...</div>)

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>{

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
