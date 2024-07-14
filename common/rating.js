import React from 'react';

const Rating = ({ rating }) => {
    const maxRating = 5;
    const filledStars = Math.round(rating) % maxRating;
    const emptyStars = maxRating - filledStars;
  
    return (
      <div className="flex items-center">
        {Array.from({ length: filledStars }).map((_, index) => (
          <svg
            key={`star-filled-${index}`}
            className="h-6 w-6 fill-current text-yellow-500"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 1l2.39 6.14h6.22l-4.95 3.82 1.9 5.86L10 12.29l-4.57 3.63 1.9-5.86L1.39 7.14h6.22L10 1z"
            />
          </svg>
        ))}
        {Array.from({ length: emptyStars }).map((_, index) => (
          <svg
            key={`star-empty-${index}`}
            className="h-6 w-6 fill-current text-gray-300"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 1l2.39 6.14h6.22l-4.95 3.82 1.9 5.86L10 12.29l-4.57 3.63 1.9-5.86L1.39 7.14h6.22L10 1z"
            />
          </svg>
          
        ))}
      </div>
    );
  };
  
  export default Rating;