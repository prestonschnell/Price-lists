import React from 'react'
import './nav.css'
import logo from "../assets/logo.png"

const Nav = () => {
  return (
    <div className="nav-container">
      <img src={logo} alt="" />
      <ul className='drop-list'>
        <li>Product</li>
        <li>Templates</li>
        <li>Pricing</li>
        <li>Reviews</li>
      </ul>
      <div className='nav-buttons'>
        <ul>
            <button>Log In</button>
            <button>Start Free</button>
        </ul>
      </div>
    </div>
  )
}

export default Nav
