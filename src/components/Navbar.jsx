import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <div className="logo">
            <h2>HiiDevs</h2>
        </div>
        <div className="nav-1">
            <p>Home</p>
            <p>Contact</p>
            <p>Help</p>
            <p>Feedback</p>
        </div>
        <div className="nav-2">
            <input type="text" />
            <button>Search</button>
        </div>
    </nav>
  )
}

export default Navbar