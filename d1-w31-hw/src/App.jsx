import { useState } from 'react'
import './App.css'
import BackgrounColor from './components/BackgrounColor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BackgrounColor/>
    </>
  )
}

export default App
