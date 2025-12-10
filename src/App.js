import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./CartContext";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import About from "./components/About";
import Contact from './components/Contact'
import Login from './components/Login';
import Signup from './components/Signup';









import "./App.css";
 function App(){
      return(
        
        
    <CartProvider>
    <Router>
      
          
      
    
      
    
  
    <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />
           <Route path="/contact" element={<Contact />} /> {/* New Route */}
           <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
          
        </Routes>
      </Router>
    </CartProvider>
 )
}


export default App;
