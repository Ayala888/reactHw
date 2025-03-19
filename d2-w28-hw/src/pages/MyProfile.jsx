import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function MyProfile() {
    const navigate = useNavigate()
  return (
    <div>
      <h3>Аты: Жақанбай Аяла</h3>
      <h3>Email: ayalazhk8@gmail.com</h3>
      <h3>Оқитын академиясы: Amjilt Cyber School</h3>
      <button onClick={()=>navigate('/projects')}>Go to My Project</button>
    </div>
  )
}
