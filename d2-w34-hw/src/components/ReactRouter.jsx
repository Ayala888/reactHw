import React from 'react'
import { Link } from 'react-router-dom'

export default function ReactRouter() {
  return (
    <div>
      <Link to={'/home'}>Home</Link>
      <Link to={'/timer'}>Timer</Link>
      <Link to={'/data'}>Data</Link>
      
    </div>
  )
}
