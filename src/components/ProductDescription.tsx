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

const sampleData: ProductDescriptionProps[] = [
  {
    id: 1,
    title: "Safari Adventures",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1557507175-3e6c3b0468b4?ixlib=rb-4.0.3",
    rating: 5,
    ageGroup: "4-8 years",
    description: "Embark on an exciting journey through the African savanna with our Safari Adventures coloring book. Each page features detailed illustrations of majestic lions, gentle elephants, towering giraffes, and other fascinating wildlife. This educational coloring experience helps children learn about different animals while developing their creativity and fine motor skills.",
    samplePages: [
      "https://images.unsplash.com/photo-1557507175-3e6c3b0468b4?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1557507175-3e6c3b0468b4?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1557507175-3e6c3b0468b4?ixlib=rb-4.0.3"
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
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;