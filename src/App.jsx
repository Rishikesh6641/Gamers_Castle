import './App.css'
import { AboutHome } from './components/AboutHome'
import { CardsPage } from './components/CardsPage'
import { CarouslePage } from './components/CarouslePage'
import { NavigationBar } from './components/NavigationBar'

function App() {

  return (
   <>
    <NavigationBar/>
    <CarouslePage/>
    <CardsPage/>
    <AboutHome/>
   </>
  )
}

export default App
