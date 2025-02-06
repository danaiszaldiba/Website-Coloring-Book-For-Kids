import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const books = [
  {
    id: 1,
    title: "Safari Adventures",
    image: "https://images.unsplash.com/photo-1557507175-3e6c3b0468b4?ixlib=rb-4.0.3",
    price: 14.99
  },
  {
    id: 2,
    title: "Ocean Friends",
    image: "https://images.unsplash.com/photo-1582457601528-849ac59c7c9c?ixlib=rb-4.0.3",
    price: 12.99
  },
  {
    id: 3,
    title: "Forest Creatures",
    image: "https://images.unsplash.com/photo-1603349206295-dde11d5c4a42?ixlib=rb-4.0.3",
    price: 13.99
  },
  {
    id: 4,
    title: "Jungle Expedition",
    image: "https://images.unsplash.com/photo-1535338454770-8be927b5a00b?ixlib=rb-4.0.3",
    price: 15.99
  },
  {
    id: 5,
    title: "Farm Friends",
    image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?ixlib=rb-4.0.3",
    price: 11.99
  }
];

const BookCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === books.length - 4 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? books.length - 4 : prevIndex - 1
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
              style={{ transform: `translateX(-${currentIndex * 25}%)` }}
            >
              {books.map((book) => (
                <div
                  key={book.id}
                  className="w-1/4 flex-shrink-0 px-4"
                >
                  <div className="group relative transform hover:shadow-xl transition-all duration-300 rounded-lg">
                    <div className="relative w-full h-60 bg-white rounded-lg overflow-hidden">
                      <img
                        src={book.image}
                        alt={book.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <p className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                          Click to view details
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 px-4 pb-4 transform group-hover:-translate-y-1 transition-transform duration-300">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-lg font-medium text-gray-900">{book.title}</h3>
                        <p className="text-lg font-medium text-purple-600 ml-2">${book.price}</p>
                      </div>
                      <p className="mb-2 text-sm text-gray-500">Age: 4-8 years</p>
                      <div className="mb-3 flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white py-2 px-4 rounded-md transition-colors text-sm">
                        Add to Cart
                      </button>
                    </div>
                  </div>
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
            {[...Array(books.length - 3)].map((_, index) => (
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