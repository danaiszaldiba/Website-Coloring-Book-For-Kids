import React, { useEffect, useState } from 'react';
import { Download, Users, Star, ShoppingCart } from 'lucide-react';

const stats = [
  {
    id: 1,
    title: 'Happy Customers',
    value: 15000,
    icon: Users,
    color: 'from-purple-600 to-pink-500'
  },
  {
    id: 2,
    title: 'Products Sold',
    value: 25000,
    icon: ShoppingCart,
    color: 'from-blue-600 to-cyan-500'
  },
  {
    id: 3,
    title: '5-Star Reviews',
    value: 12000,
    icon: Star,
    color: 'from-yellow-600 to-orange-500'
  }
];

const Counter = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 50;
    const stepValue = value / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      if (currentStep === steps) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(stepValue * currentStep));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{count.toLocaleString()}</span>;
};

const SalesCounter = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="relative overflow-hidden rounded-lg bg-white p-8 shadow-lg"
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-gradient-to-r opacity-20"
                style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}
              />
              <div className="relative">
                <div className={`inline-flex rounded-lg bg-gradient-to-r ${stat.color} p-3`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">{stat.title}</h3>
                <div className="mt-2 text-4xl font-extrabold text-gray-900">
                  <Counter value={stat.value} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SalesCounter;