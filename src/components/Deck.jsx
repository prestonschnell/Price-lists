import React from 'react'
import './Deck.css'
import Card from './Card'

const Deck = () => {
  return (
    <div className='deck-container'>
      <Card title="Workflow" subtitle="" price="19" />
      <Card title="Workflow Plus" subtitle="" price="29" />
    </div>
  )
}

export default Deck






/* Basically, you need a nav bar with a paragraph element on the far left side, then you need a different div element for the slider button using an animation translation. */
