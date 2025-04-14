import { useState } from 'react'
import './App.css'
import FlightProvider from './components/FlightProvider'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FlightList from './pages/FlightList'
import FlightBooking from './pages/FlightBooking'

function App() {
  return (
    <FlightProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FlightList/>}/>
          <Route path="/booking/:id" element={<FlightBooking/>}/>
        </Routes>
      </BrowserRouter>
    </FlightProvider>

  )
}

export default App
