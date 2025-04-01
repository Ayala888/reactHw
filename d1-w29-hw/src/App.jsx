import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FeedbackForm from './components/FeedbackForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'  element={<FeedbackForm/>}/>
      </Routes>
    </BrowserRouter>
  )
}


export default App
