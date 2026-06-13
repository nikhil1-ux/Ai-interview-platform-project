import React from 'react'

const Navbar = () => {
  return (
    <nav className = "navbar">
      <h2 className = "navbar-brand">AI Interview Pro</h2>
      
      <ul className = "navbar-links">
        <li>features</li>
        <li>FAQ</li>

      </ul>
      
      <div className = "nav-buttons">
        <button className = "login-button">
          Login
        </button>
        <button className = "signup-button">
          Sign Up
       </button>
        
      </div>
    </nav>
  )
}

export default Navbar