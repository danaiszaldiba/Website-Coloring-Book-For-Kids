import React from 'react';
import { Book, Download, Heart, Mail, Palette, ShoppingCart, Users } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedBooks from './components/FeaturedBooks';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <FeaturedBooks />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;