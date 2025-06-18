import React from 'react'
import './Plan.css'

const Plan = () => {
  return (
    <div className='plan-container'>
        <div className="title">
            <p>Plans & Pricing</p>
        </div>
        <div className="slider">
            <p>MONTHLY</p>
            <button id="background-button"><button id="inner-button"></button></button>
            <p>YEARLY</p>
        </div>
    </div>
  )
}

export default Plan
