import React from 'react'
import './BlueCard.css'

const BlueCard = () => {
  return (
    <div className='bluecard-container'>
      <div className='blue-container'>
        <div className='header1'>
            <p>It's <span id="special-char">your</span> business.</p>
            <p>We're here to help it grow.</p>
        </div>
        <div className='card-button'>
            <button>START FREE</button>
        </div>
      </div>
    </div>
  )
}

export default BlueCard
