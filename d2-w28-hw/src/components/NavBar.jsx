import React from 'react'
import { Link } from 'react-router-dom'
import '../style/NavBar.css' 

export default function NavBar() {
  return (
    <nav className="navbar">
      <Link to={'/profile'} className="nav-link">My Profile</Link>
      <Link to={'/projects'} className="nav-link">My Projects</Link>
      <Link to={'/about'} className="nav-link">About Me</Link>
    </nav>
  )
}


