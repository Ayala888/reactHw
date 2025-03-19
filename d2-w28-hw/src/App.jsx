import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MyProfile from './pages/MyProfile'
import MyProject from './pages/MyProject'
import AboutMe from './pages/AboutMe'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/'element={<Home/>} />
        <Route path='/profile'element={<MyProfile/>} />
        <Route path='/projects'element={<MyProject/>} />
        <Route path='/about'element={<AboutMe/>} />


      </Routes>
    </BrowserRouter>
  )
}

export default App

