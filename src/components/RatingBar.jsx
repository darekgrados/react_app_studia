import React from 'react';

const RatingBar = ({ rate }) => {
  const totalStars = 10;

  return (
    <div>
      {[...Array(totalStars)].map((_, index) => (
        <span key={index} style={{ color: index < rate ? 'gold' : 'lightgray' }}>
          {index < rate ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
};

export default RatingBar;
