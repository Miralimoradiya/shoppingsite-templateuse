import React from 'react';

const Rating = ({ rating }) => {
  return (
    <ul className="list-unstyled d-flex">
      {[...Array(5)].map((_, i) => (
        <li key={i}>
          <i
            className={`fa fa-star ${
              i < rating ? 'text-warning' : 'text-muted'
            }`}
          ></i>
        </li>
      ))}
    </ul>
  );
};

export default Rating;