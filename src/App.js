import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Exchanges from './components/Exchanges'
import Coins from './components/Coins'
import CoinDetails from './components/CoinDetails'
import Header from './components/Header'
import Contact from './components/Contact'
// import RadioButton from './components/radiobutton'

function App() {
  return (

    <Router>
      <Header/>
      {/* <RadioButton/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/coins" element={<Coins/>}/>
        <Route path="/exchanges" element={<Exchanges/>}/>
        <Route path="/coins/:id" element={<CoinDetails/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
      
  );
}

export default App;
