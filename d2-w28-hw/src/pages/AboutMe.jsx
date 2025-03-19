import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function AboutMe() {
    const navigate = useNavigate()
  return (
    <div>
      <h3>Атым: Аяла</h3>
      <h3>Жасым: 16</h3>
      <h3>Хоббиім: дорама көру және тамақ пісіру</h3>
      <button onClick={()=>navigate('/profile')}>Go to My Profile</button>
    </div>
  )
}