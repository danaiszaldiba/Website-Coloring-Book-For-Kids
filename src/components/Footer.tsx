import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-white text-lg font-bold">ColorFun</h3>
            <p className="text-gray-400">Inspiring creativity in children through the joy of coloring.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Shop</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Free Pages</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Shipping Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Returns</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe for updates and special offers!</p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-center">
            © {new Date().getFullYear()} ColorFun. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;