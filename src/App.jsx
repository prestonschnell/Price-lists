import React from 'react'
import './App.css'
import Nav from './components/nav'
import Deck from './components/Deck'
import Plan from './components/Plan'
import Header2 from './components/Header2'
import AddOns from './components/AddOns'

const App = () => {
  return (
    <div>
      <Nav />
      <Plan/>
      <Deck/>
      <Header2/>
      <AddOns tier="Collaborators" subtext="Invite other users to specific projects for limited access and functionality." price="Free"/>
      <AddOns tier="Partners" subtext="Invite other users for full account access and company management." price="$9"/>
      <AddOns tier="Bonsai Tax" subtext="Track expenses, identify write-offs, and estimate quarterly taxes easily." price="$10"/>
    </div>
  )
}

export default App
