import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='card-container'>
      <div className="card-title">
           <h1>{props.title}</h1>
            <p>{props.subtitle}</p> 
        </div>
      <h2 id="card-price">$ {props.price} /MONTH</h2>
      <ul>
        <li>Unlimited Clients & Projects</li>
        <li>Proposals</li>
        <li>Contracts</li>
        <li>Invoicing & Payments</li>
        <li>Client CRM</li>
        <li>Project Management</li>
        <li>Task & Time Tracking</li>
        <li>iOS, Android, Chrome, & Mac Apps</li>
      </ul>
      <div className="button-container">
        <button>START FREE</button>
        </div>
    </div>
  )
}

export default Card
