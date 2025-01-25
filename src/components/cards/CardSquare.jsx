import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../content/Rating';
import Price from '../content/Price';
import Reviews from '../content/Reviews';

const CardSquare = ({ product }) => {
  return (
    <div className="col-12 col-md-4 mb-4">
      <div className="card h-100">
        <Link className="nav-link" to={product.link}>
          <img
            src={product.image}
            className="card-img-top"
            alt={product.name}
          />
        </Link>
        <div className="card-body">
          <div className="d-flex justify-content-between mb-3">
          <Rating rating={product.rating} />

            <Price price={product.price} />
          </div>
          <Link
            to={product.link}
            className="h2 text-decoration-none text-dark nav-link p-0 mb-3"
          >
            {product.name}
          </Link>
          <p className="card-text">{product.description}</p>
          <Reviews reviews={product.reviews} />
        </div>
      </div>
    </div>
  );
};

export default CardSquare;