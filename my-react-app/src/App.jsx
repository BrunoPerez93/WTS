

import './App.css'
import BillboardGroup from './components/Billboard/BillboardGroup'
import CarruselGroup from './components/Carrusel/CarruselGroup'
import Nav from './components/Nav/Nav'
import React from 'react'
import Review from './components/Review/Review'

function App() {

  return (
    <div>
      <Nav />
      <CarruselGroup />
      <BillboardGroup/>
      <Review />
    </div>
  )
}


export default App
