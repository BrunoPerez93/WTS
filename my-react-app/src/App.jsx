
import './App.css'
import BillboardGroup from './components/Billboard/BillboardGroup'
import CarruselGroup from './components/Carrusel/CarruselGroup'
import Nav from './components/Nav/Nav'
import Review from './components/Review/Review'

function App() {


  return (
    <>
      <Nav />
      <CarruselGroup />
      <BillboardGroup />
      <Review />
    </>
  )
}

export default App
