import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const books = [
  {
    id: 1,
    title: "How to Draw Everything",
    image: "https://m.media-amazon.com/images/I/71kt5YYFAfL._SL1293_.jpg",
    price: 12.36
  },
  {
    id: 2,
    title: "How to Draw 101 Stuff",
    image: "https://m.media-amazon.com/images/I/61IIZc-UjPL._SL1293_.jpg",
    price: 11.75
  },
  {
    id: 3,
    title: "The Creative Toddler",
    image: "https://m.media-amazon.com/images/I/61mqoTWhYnL._SL1294_.jpg",
    price: 5.99
  },
  {
    id: 4,
    title: "Mermaid Coloring Book",
    image: "https://m.media-amazon.com/images/I/81zgkXfxjBL._SL1360_.jpg",
    price: 5.99
  },
  {
    id: 5,
    title: "ABC Coloring Book",
    image: "https://m.media-amazon.com/images/I/71qCWeJwPjL._SL1294_.jpg",
    price: 3.99
  },
  {
    id: 6,
    title: "Fantasy Dragons",
    image: "https://m.media-amazon.com/images/I/81NF2Z1kEjL._SL1500_.jpg",
    price: 13.99
  },
  {
    id: 7,
    title: "Space Adventure",
    image: "https://m.media-amazon.com/images/I/71giCWW4YhL._SL1200_.jpg",
    price: 14.99
  }
];

const BookCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === books.length - 6 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? books.length - 6 : prevIndex - 1
    );
  };

  return (
    <section className="py-12 bg-gradient-to-r from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Discover More Books
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Explore our complete collection of coloring books
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 16.666}%)` }}
            >
              {books.map((book, index) => (
                <div
                  key={book.id}
                  className="w-1/6 flex-shrink-0 px-3"
                >
                  <Link to={`/product/${book.id}`} className="group relative transform hover:shadow-xl transition-all duration-300 rounded-lg">
                    <div className="relative w-full h-72 bg-white rounded-lg overflow-hidden">
                      <img
                        src={book.image}
                        alt={book.title}
                        className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
                        style={{ objectPosition: 'center' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <p className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                          Click to view details
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-lg text-purple-600 hover:text-purple-700 transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-lg text-purple-600 hover:text-purple-700 transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="flex justify-center mt-6 space-x-2">
            {[...Array(books.length - 5)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full transition-colors ${currentIndex === index ? 'bg-purple-600' : 'bg-purple-200'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookCarousel;