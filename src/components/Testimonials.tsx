import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "These coloring books have been a game-changer for my kids. They spend hours being creative and having fun!",
    author: "Sarah M.",
    role: "Parent of two"
  },
  {
    id: 2,
    content: "The quality of the paper and designs is outstanding. My daughter loves the magical themes!",
    author: "Michael R.",
    role: "Father"
  },
  {
    id: 3,
    content: "Perfect for developing fine motor skills. My son's coordination has improved significantly.",
    author: "Emily L.",
    role: "Mother & Teacher"
  }
];

const Testimonials = () => {
  return (
    <section className="py-12 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Parents Say
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Don't just take our word for it
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <Quote className="h-8 w-8 text-purple-400 mb-4" />
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div className="border-t pt-4">
                <p className="font-medium text-gray-900">{testimonial.author}</p>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;