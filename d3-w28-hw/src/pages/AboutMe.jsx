import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from "../components/NavBar";

export default function AboutMe() {
    const navigate = useNavigate()
  return (
    <div>
      <Navbar />
      <h3>Атым: Аяла</h3>
      <h3>Жасым: 16</h3>
      <h3>Хоббиім: дорама көру және тамақ пісіру</h3>
    </div>
  )
}