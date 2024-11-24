import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar'
import Home from './pages/Home';
import Carousel from './components/Carousel';
import Carousel2 from './components/Carousel2';
import RestaurantPage from './pages/RestaurantPage';
import Cards from './pages/Cards';

import './App.css'
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          
        </Routes>
        <Routes>
          
          <Route path="/" element={<RestaurantPage />} />
        </Routes>
        <Routes>
          <Route path="/" element={< Cards/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
    
  );
}

export default App;
