import './App.css'
import React, { useState } from "react";
import { AboutHome } from './components/AboutHome'
import { CardsPage } from './components/CardsPage'
import { CarouslePage } from './components/CarouslePage'
import { NavigationBar } from './components/NavigationBar'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Signin from './components/Signin'
import Signup from './components/Signup'
import ProductSection from "./components/ProductSection";
import GameDetails from './components/GameDetails'; 
import Admin from './components/admin';
const App = ()=> {
  const [selectedCategory, setSelectedCategory] = useState("All Games");

  const games = [
    { id: 1, name: "Grand Theft Auto V", category: "Open World Games", reviews: 12, rating: 5, image: '/images/header (5).jpg', description: "An open-world action-adventure game.", video: '/images/rain.mp4' },
    { id: 2, name: "Dead by Daylight", category: "Multiplayer Games", reviews: 24, rating: 5, image: '/images/header (1).jpg', description: "A multiplayer horror game." , video: '/images/rain1.mp4'},
    { id: 3, name: "Counter-Strike: Global Offensive", category: "Competitive Games", reviews: 36, rating: 5, image: '/images/header (2).jpg', description: "A competitive multiplayer first-person shooter.",video: '/images/rain2.mp4' },
    { id: 4, name: "VALORANT", category: "Competitive Games", reviews: 48, rating: 5, image: '/images/header (3).jpg', description: "A tactical first-person shooter with unique characters.",video: '/images/rain3.mp4' },
    { id: 5, name: "Rainbow Six Siege", category: "Multiplayer Games", reviews: 24, rating: 5, image: '/images/header (4).jpg', description: "A tactical multiplayer first-person shooter.",video: '/images/rain4.mp4' },
    { id: 6, name: "NBA 2K23", category: "Multiplayer Games", reviews: 24, rating: 5, image: '/images/header (6).jpg', description: "A basketball simulation video game." ,video: '/images/rain9.mp4'},
    { id: 7, name: "Cricket 22", category: "Multiplayer Games", reviews: 36, rating: 5, image: '/images/header (7).jpg', description: "A competitive multiplayer first-person shooter.",video: '/images/rain6.mp4' },
    { id: 8, name: "Phasmophobia", category: "Multiplayer Games", reviews: 48, rating: 5, image: '/images/header (8).jpg', description: "A tactical first-person shooter with unique characters." ,video: '/images/rain7.mp4'},
    { id: 9, name: "Horizon Zero Dawn™ Complete Edition", category: "Multiplayer Games", reviews: 24, rating: 5, image: '/images/header (10).jpg', description: "A tactical multiplayer first-person shooter.",video: '/images/rain8.mp4' },
    { id: 10, name: "EA SPORTS™ FIFA 23", category: "Open World Games", reviews: 24, rating: 5, image: '/images/header (9).jpg', description: "A basketball simulation video game.",video: '/images/rain10.mp4' },
  ];

  return (
   <>
   <Router>
    <NavigationBar/>
    <Routes>
      <Route path='/' element={ <AboutHome/>}/>
      <Route path='/signin' element={ <Signin/>}/>
      <Route path='/signup' element={ <Signup/>}/>
      <Route 
            path="/products" 
            element={<ProductSection games={games} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />} 
          />
          
          
          <Route 
            path="/game/:id" 
            element={<GameDetails games={games} />} 
          />
            <Route path='/admin' element={<Admin/>} />
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
