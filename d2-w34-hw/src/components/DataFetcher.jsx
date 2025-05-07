import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function DataFetcher() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
      if (!response.ok) throw new Error('Жүктеу қатесі')
      const result = await response.json()
      setData(result)
      setError(null)
    } catch (err) {
      setError(err.message)
      setData(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
    const intervalId = setInterval(fetchData, 5000)

    return () => {
      clearInterval(intervalId)
      console.log('Polling тоқтатылды')
    }
  }, [])

  return (
    <div>
      <Link to="/">Шығу</Link>
      <h1>API деректері</h1>

      {loading && <p>Жүктелуде...</p>}
      {error && <p>Қате: {error}</p>}
      {data && (
        <div>
          <h3>{data.title}</h3>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  )
}
