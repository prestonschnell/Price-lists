import React from 'react'
import './AddOns.css'

const AddOns = (props) => {
  return (
    <div className='addon-container'>
        <div className="div-container">
      <div className="title">
        <h1>{props.tier}</h1>
        <p>{props.subtext}</p>
      </div>

    <div className="price">
        <h1>{props.price}</h1>
    </div>
    </div>
    </div>
  )
}

export default AddOns
