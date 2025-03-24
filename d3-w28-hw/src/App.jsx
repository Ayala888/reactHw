import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import PostDetail from './pages/PostDetail'
import Projects from './pages/Projects'

function App() {
  return (
    <BrowserRouter>
      <Routes>


        <Route path='/'element={<Home/>} />
        <Route path='/projects'element={<Projects/>} />
        <Route path='/projects/:id' element={<PostDetail/>} />
        <Route path='/about'element={<AboutMe/>} />


      </Routes>
    </BrowserRouter>
  )
}

export default App
