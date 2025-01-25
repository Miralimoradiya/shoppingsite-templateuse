import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import About from "../../pages/About";
import Index from "../../pages/Index"; 
import Contact from "../../pages/Contact";
import Shop from "../../pages/Shop";
import Shopsingle from "../../pages/Shopsingle";
import Navigation from "../../pages/Navigation";
import Home from "../../pages/Home"
import Cart from "../../pages/Cart";

const Routs = () => {
  return (
    <Router>
      <Navigation/>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shopsingle" element={<Shopsingle />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <Footer />
    </Router>
  );
};

export default Routs;
