import React, { useState } from 'react';
import { Book, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Book className="h-8 w-8 text-purple-600" />
            <span className="ml-2 text-xl font-bold text-purple-600">ColorFun</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Home</a>
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Shop</a>
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Free Pages</a>
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Blog</a>
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">About</a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-purple-600 hover:bg-purple-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md text-gray-600 hover:text-purple-600 hover:bg-purple-100">Home</a>
            <a href="#" className="block px-3 py-2 rounded-md text-gray-600 hover:text-purple-600 hover:bg-purple-100">Shop</a>
            <a href="#" className="block px-3 py-2 rounded-md text-gray-600 hover:text-purple-600 hover:bg-purple-100">Free Pages</a>
            <a href="#" className="block px-3 py-2 rounded-md text-gray-600 hover:text-purple-600 hover:bg-purple-100">Blog</a>
            <a href="#" className="block px-3 py-2 rounded-md text-gray-600 hover:text-purple-600 hover:bg-purple-100">About</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;