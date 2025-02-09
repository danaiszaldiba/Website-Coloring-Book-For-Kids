import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const animalBooks = [
  {
    id: 1,
    title: "Safari Adventures",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1557507175-3e6c3b0468b4?ixlib=rb-4.0.3",
    rating: 5,
    ageGroup: "4-8 years",
    description: "Explore the African savanna with lions, elephants, and giraffes"
  },
  {
    id: 2,
    title: "Ocean Friends",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1582457601528-849ac59c7c9c?ixlib=rb-4.0.3",
    rating: 4,
    ageGroup: "3-6 years",
    description: "Dive into an underwater world of dolphins, whales, and colorful fish"
  },
  {
    id: 3,
    title: "Forest Creatures",
    price: 13.99,
    image: "https://images.unsplash.com/photo-1603349206295-dde11d5c4a42?ixlib=rb-4.0.3",
    rating: 5,
    ageGroup: "5-9 years",
    description: "Meet the friendly animals of the woodland forest"
  },
  {
    id: 4,
    title: "Jungle Expedition",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1535338454770-8be927b5a00b?ixlib=rb-4.0.3",
    rating: 5,
    ageGroup: "6-10 years",
    description: "Adventure through the rainforest with exotic animals"
  },
  {
    id: 5,
    title: "Farm Friends",
    price: 11.99,
    image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?ixlib=rb-4.0.3",
    rating: 4,
    ageGroup: "2-5 years",
    description: "Visit the barnyard and meet friendly farm animals"
  },
  {
    id: 6,
    title: "Arctic Animals",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?ixlib=rb-4.0.3",
    rating: 5,
    ageGroup: "5-8 years",
    description: "Discover the amazing animals of the frozen north"
  },
  {
    id: 7,
    title: "Australian Wildlife",
    price: 13.99,
    image: "https://images.unsplash.com/photo-1578326457399-3b34dbbf23b8?ixlib=rb-4.0.3",
    rating: 4,
    ageGroup: "4-7 years",
    description: "Meet unique animals from the land down under"
  },
  {
    id: 8,
    title: "Dinosaur World",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1569144157591-c60f3f82f137?ixlib=rb-4.0.3",
    rating: 5,
    ageGroup: "6-12 years",
    description: "Journey back in time with prehistoric creatures"
  },
  {
    id: 9,
    title: "Pet Pals",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?ixlib=rb-4.0.3",
    rating: 4,
    ageGroup: "3-6 years",
    description: "Color your favorite household pets"
  }
];

const AnimalsBooks = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Animal Coloring Books
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Explore our collection of animal-themed coloring books
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {animalBooks.map((book) => (
            <Link to={`/product/${book.id}`} key={book.id} className="group relative bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative w-full h-60 bg-white rounded-t-lg overflow-hidden group-hover:opacity-75 transition-opacity">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-medium text-gray-900">{book.title}</h3>
                  <p className="text-lg font-medium text-purple-600 ml-2">${book.price}</p>
                </div>
                <p className="mb-2 text-sm text-gray-500">Age: {book.ageGroup}</p>
                <p className="mb-3 text-sm text-gray-600 line-clamp-2">{book.description}</p>
                <div className="mb-4 flex items-center">
                  {[...Array(book.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white py-2 px-4 rounded-md transition-colors font-medium">
                  Buy Now
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimalsBooks;