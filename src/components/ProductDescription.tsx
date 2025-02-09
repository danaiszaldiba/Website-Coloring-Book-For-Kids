import React from 'react';
import { Star, ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

interface ProductDescriptionProps {
  id: number;
  title: string;
  price: number;
  image: string;
  rating: number;
  ageGroup: string;
  description: string;
  samplePages?: string[];
}

const reviews = [
  {
    id: 1,
    rating: 5,
    comment: "My daughter loves this coloring book! The illustrations are beautiful and engaging.",
    author: "Emily R.",
    date: "2023-05-15"
  },
  {
    id: 2,
    rating: 4,
    comment: "Great quality paper and wonderful designs. Perfect for my 6-year-old.",
    author: "Michael S.",
    date: "2023-05-10"
  },
  {
    id: 3,
    rating: 5,
    comment: "The variety of illustrations keeps my child entertained for hours!",
    author: "Sarah L.",
    date: "2023-05-08"
  }
];

const relatedProducts = [
  {
    id: 5,
    title: "Fantasy Dragons",
    price: 13.99,
    image: "https://images.unsplash.com/photo-1582457601528-849ac59c7c9c?ixlib=rb-4.0.3",
    rating: 5
  },
  {
    id: 6,
    title: "Space Adventure",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?ixlib=rb-4.0.3",
    rating: 4
  },
  {
    id: 7,
    title: "Fairy Garden",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1578326457399-3b34dbbf23b8?ixlib=rb-4.0.3",
    rating: 5
  }
];

const sampleData: ProductDescriptionProps[] = [
  {
    id: 1,
    title: "Animal Adventures",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    rating: 5,
    ageGroup: "3-6 years",
    description: "Embark on an exciting journey with our Animal Adventures coloring book. Each page features adorable and engaging animal illustrations that help children develop their creativity while learning about different creatures. Perfect for young artists beginning their coloring journey!",
    samplePages: [
      "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.0.3"
    ]
  },
  {
    id: 2,
    title: "Magical Unicorns",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1071&q=80",
    rating: 4,
    ageGroup: "4-8 years",
    description: "Enter a magical world of unicorns and enchantment! This coloring book is filled with whimsical unicorn designs, rainbows, and magical scenes that will delight children and spark their imagination. Each page offers a new magical adventure to color!",
    samplePages: [
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3"
    ]
  },
  {
    id: 3,
    title: "Ocean Wonders",
    price: 13.99,
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    rating: 5,
    ageGroup: "5-10 years",
    description: "Dive deep into an underwater adventure with our Ocean Wonders coloring book. Discover amazing sea creatures, beautiful coral reefs, and mysterious deep-sea scenes. This educational coloring experience teaches children about marine life while having fun!",
    samplePages: [
      "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.0.3"
    ]
  },
  {
    id: 4,
    title: "Dinosaur Adventure",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1569144157591-c60f3f82f137?ixlib=rb-4.0.3",
    rating: 5,
    ageGroup: "6-12 years",
    description: "Travel back in time with our Dinosaur Adventure coloring book! Featuring detailed illustrations of various dinosaur species, prehistoric landscapes, and fascinating fossil discoveries. Perfect for young paleontologists who love to color and learn about these amazing creatures.",
    samplePages: [
      "https://images.unsplash.com/photo-1569144157591-c60f3f82f137?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1569144157591-c60f3f82f137?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1569144157591-c60f3f82f137?ixlib=rb-4.0.3"
    ]
  }
];

const ProductDescription = () => {
  const { id } = useParams<{ id: string }>();
  const product = sampleData.find(item => item.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-purple-600 hover:text-purple-700">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Products
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image Section */}
          <div className="space-y-6">
            <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.samplePages?.map((page, index) => (
                <div key={index} className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src={page}
                    alt={`Sample page ${index + 1}`}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details Section */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">{product.title}</h1>
              <div className="mt-4 flex items-center">
                <div className="flex items-center">
                  {[...Array(product.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="ml-3 text-gray-500">({product.rating} stars)</span>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-xl font-semibold text-gray-900">Description</h2>
              <div className="mt-4 prose prose-purple">
                <p className="text-gray-600">{product.description}</p>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center">
                <span className="text-gray-600">Age Group:</span>
                <span className="ml-2 text-purple-600 font-medium">{product.ageGroup}</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600">Price:</span>
                <span className="ml-2 text-2xl font-bold text-purple-600">${product.price}</span>
              </div>
            </div>

            <div className="mt-8">
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white py-4 px-8 rounded-md transition-colors font-medium text-lg flex items-center justify-center">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* User Reviews Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Customer Reviews</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-500">({review.rating} stars)</span>
                </div>
                <p className="text-gray-600 mb-4">{review.comment}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{review.author}</span>
                  <span>{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">You May Also Like</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedProducts.map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                to={`/product/${relatedProduct.id}`}
                className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.title}
                    className="w-full h-full object-center object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{relatedProduct.title}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {[...Array(relatedProduct.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-lg font-medium text-purple-600">${relatedProduct.price}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;