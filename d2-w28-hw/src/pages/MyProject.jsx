import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function MyProject() {
    const navigate = useNavigate()
  return (
    <div>
      <h3>1-ші Жоба: Flower websit</h3>
      <p>Онлайн түрде гүл сатып алуға арналған ыңғайлы сайт.</p>
      <h3>2-ші Жоба: New Year</h3>
      <p>Жаңа жылға арналған сайт.</p>
      <button onClick={()=>navigate('/about')}>Go to  About Me</button>
    </div>
  )
}