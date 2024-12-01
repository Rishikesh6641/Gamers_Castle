import './App.css'
import { AboutHome } from './components/AboutHome'
import { CardsPage } from './components/CardsPage'
import { CarouslePage } from './components/CarouslePage'
import { NavigationBar } from './components/NavigationBar'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Signin from './components/Signin'
import Signup from './components/Signup'
function App() {

  return (
   <>
   <Router>
    <NavigationBar/>
    <Routes>
      <Route path='/' element={ <AboutHome/>}/>
      <Route path='/signin' element={ <Signin/>}/>
      <Route path='/signup' element={ <Signup/>}/>
    </Routes>
   </Router>
    {/* <NavigationBar/>
    <CarouslePage/>
    <CardsPage/>
    <AboutHome/> */}
   </>
  )
}

export default App
