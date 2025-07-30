import React from 'react'
import './nav.css'
import logo from "../assets/logo.png"

const Nav = () => {
  return (
    <div className="nav-container">
      <img src={logo} alt="Company Logo" />
      <ul className='drop-list'>
        <li>Product</li>
        
        <li>Templates</li>
        <li>Pricing</li>
        <li>Reviews</li>
      </ul>
      <div className='nav-buttons'>
        <ul>
            <button id="button1">Log In</button>
            <button id="button2">Start Free</button>
        </ul>
      </div>
    </div>
  )
}

export default Nav
