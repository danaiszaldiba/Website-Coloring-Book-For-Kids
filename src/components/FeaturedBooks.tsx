import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const books = [
  {
    id: 1,
    title: "Animal Adventures",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    rating: 5,
    ageGroup: "3-6 years"
  },
  {
    id: 2,
    title: "Magical Unicorns",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1071&q=80",
    rating: 4,
    ageGroup: "4-8 years"
  },
  {
    id: 3,
    title: "Ocean Wonders",
    price: 13.99,
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    rating: 5,
    ageGroup: "5-10 years"
  },
  {
    id: 4,
    title: "Dinosaur Adventure",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1569144157591-c60f3f82f137?ixlib=rb-4.0.3",
    rating: 5,
    ageGroup: "6-12 years"
  }
];

const FeaturedBooks = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Featured Coloring Books
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Our most popular coloring books loved by kids worldwide
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {books.map((book, index) => (
            index === 0 ? (
              <Link to={`/product/${book.id}`} key={book.id} className="group relative transform hover:shadow-xl transition-all duration-300 rounded-lg">
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
                    <h3 className="text-base font-medium text-gray-900">{book.title}</h3>
                    <p className="text-base font-medium text-purple-600 ml-2">${book.price}</p>
                  </div>
                  <p className="mb-2 text-xs text-gray-500">Age: {book.ageGroup}</p>
                  <div className="mb-3 flex items-center">
                    {[...Array(book.rating)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white py-2 px-4 rounded-md transition-colors text-sm">
                    View Details
                  </button>
                </div>
              </Link>
            ) : (
              <Link to={`/product/${book.id}`} key={book.id} className="group relative transform hover:shadow-xl transition-all duration-300 rounded-lg">
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
                    <h3 className="text-base font-medium text-gray-900">{book.title}</h3>
                    <p className="text-base font-medium text-purple-600 ml-2">${book.price}</p>
                  </div>
                  <p className="mb-2 text-xs text-gray-500">Age: {book.ageGroup}</p>
                  <div className="mb-3 flex items-center">
                    {[...Array(book.rating)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white py-2 px-4 rounded-md transition-colors text-sm">
                    Add to Cart
                  </button>
                </div>
              </Link>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;