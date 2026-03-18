import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [data, setData] = useState([])
  const [deletingIds, setDeletingIds] = useState([])

  const url = 'https://696d81f4f4a79b31518151fe.mockapi.io/api/v1/sinhVien';

  async function handleGet() {
    async function fetchData(params) {
      var res = await fetch(url);
      var dataFetch = await res.json();
      setData(dataFetch)
    }
    fetchData();
  }

  async function handlePost() {
    const name = prompt('New student name:')
    const avatar = prompt('Avatar URL:')
    if (!name) return

    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, avatar })
    })
    const newItem = await res.json()
    setData(prev => [newItem, ...prev])
  }

  async function handlePut() {
    const id = prompt('Enter id to edit:')
    if (!id) return
    const name = prompt('New name:')
    const avatar = prompt('New avatar URL:')
    if (!name) return

    const res = await fetch(`${url}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, avatar })
    })
    const updated = await res.json()
    setData(prev => prev.map(it => it.id === updated.id ? updated : it))
  }

  async function handleDelete() {
    const id = prompt('Enter id to delete:')
    if (!id) return

    await fetch(`${url}/${id}`, { method: 'DELETE' })
    setData(prev => prev.filter(it => it.id !== id))
  }

  // Per-item update
  async function handleUpdateItem(item) {
    const name = prompt('Edit name:', item.name)
    if (name === null) return // cancelled
    const avatar = prompt('Edit avatar URL:', item.avatar)
    if (avatar === null) return

    const res = await fetch(`${url}/${item.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, avatar })
    })
    const updated = await res.json()
    setData(prev => prev.map(it => it.id === updated.id ? updated : it))
  }

  // Per-item delete
  async function handleDeleteItem(id) {
    const ok = confirm('Delete this student?')
    if (!ok) return

    // mark as deleting to update UI
    setDeletingIds(prev => [...prev, id])
    try {
      const res = await fetch(`${url}/${id}`, { method: 'DELETE' })
      if (!res.ok) throw new Error('Delete failed')
      setData(prev => prev.filter(it => it.id !== id))
    } catch (err) {
      console.error(err)
      alert('Failed to delete item. Please try again.')
    } finally {
      setDeletingIds(prev => prev.filter(x => x !== id))
    }
  }

  return (
    <>
      <button onClick={handleGet}>GET</button>
      <button onClick={handlePost}>POST</button>
      <button onClick={handlePut}>PUT</button>
      <button onClick={handleDelete}>DELETE</button>
      <div className="student-list">
        {
          data.map((item) => {
            return (
              <div className="student-card" key={item.id}>
                <img src={item.avatar} alt={item.name} className="student-avatar" />
                <div className="student-info">
                  <h2 className="student-name">{item.name}</h2>
                  <div className="student-meta">ID: {item.id}</div>
                  {/* render any other fields dynamically */}
                  {Object.entries(item).map(([k, v]) => (
                    k !== 'id' && k !== 'name' && k !== 'avatar' ? (
                      <div className="student-meta" key={k}>{k}: {String(v)}</div>
                    ) : null
                  ))}
                </div>
                <div className="student-actions">
                  <button className="btn btn-edit" onClick={() => handleUpdateItem(item)}>Edit</button>
                  <button
                    className="btn btn-delete"
                    onClick={() => handleDeleteItem(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            )

          })
        }
      </div>
    </>
  )
}

export default App
