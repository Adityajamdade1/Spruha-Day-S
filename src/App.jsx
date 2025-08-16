import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import BrandStory from './pages/BrandStory';
import Slider from './components/slider';
import ProductDetails from './pages/ProductDetails';
import About from './pages/About';
import './App.css';

function App() {
  const location = useLocation();

  // Show slider only on the home page
  const showSlider = location.pathname === "/";

  return (
    <>
      <Header />
      {showSlider && <Slider />}
      
      {/* Add paddingTop to avoid overlap with fixed navbar */}
      <main style={{ paddingTop: '0px', minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/brand-story" element={<BrandStory />} />
          <Route path="/about" element={<About />} />


          {/* other routes */}
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
