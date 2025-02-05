import React from 'react';
import { Star } from 'lucide-react';

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

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => (
            <div key={book.id} className="group relative">
              <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 transition-opacity">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-gray-900">{book.title}</h3>
                  <p className="text-lg font-medium text-purple-600">${book.price}</p>
                </div>
                <p className="mt-1 text-sm text-gray-500">Age: {book.ageGroup}</p>
                <div className="mt-1 flex items-center">
                  {[...Array(book.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <button className="mt-4 w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white py-2 px-4 rounded-md transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;