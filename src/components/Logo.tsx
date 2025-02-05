import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-book"
      >
        <defs>
          <linearGradient id="bookGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9333EA" className="animate-gradient-start">
              <animate
                attributeName="stop-color"
                values="#9333EA; #EC4899; #9333EA"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#EC4899" className="animate-gradient-end">
              <animate
                attributeName="stop-color"
                values="#EC4899; #9333EA; #EC4899"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
        </defs>
        <g className="book-animation">
          <path
            d="M4 24V8C4 6.89543 4.89543 6 6 6H26C27.1046 6 28 6.89543 28 8V24C28 25.1046 27.1046 26 26 26H6C4.89543 26 4 25.1046 4 24Z"
            fill="url(#bookGradient)"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 16 16"
              to="-5 16 16"
              dur="1.5s"
              repeatCount="indefinite"
              additive="sum"
              values="0 16 16; -5 16 16; 0 16 16"
              keyTimes="0; 0.5; 1"
            />
          </path>
          <path
            d="M16 6V26"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
      </svg>
      <span className="ml-2 text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">The Fun Corner</span>
    </Link>
  );
};

export default Logo;