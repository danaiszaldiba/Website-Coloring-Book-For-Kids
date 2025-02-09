import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Book, Download, Heart, Mail, Palette, ShoppingCart, Users } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedBooks from './components/FeaturedBooks';
import Testimonials from './components/Testimonials';
import BookCarousel from './components/BookCarousel';
import Footer from './components/Footer';
import Blog from './components/Blog';
import AnimalsBooks from './components/AnimalsBooks';
import About from './components/About';
import ProductDescription from './components/ProductDescription';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <FeaturedBooks />
              <Testimonials />
              <BookCarousel />
            </main>
          } />
          <Route path="/blog" element={<Blog />} />
          <Route path="/books/animals" element={<AnimalsBooks />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<ProductDescription />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
