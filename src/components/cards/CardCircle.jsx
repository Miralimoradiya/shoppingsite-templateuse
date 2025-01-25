import React from 'react';
import { FormButton } from '../formCompo/FormButton';

const CardCircle = ({ category }) => {
  return (
    <div className="col-12 col-md-4 p-5 mt-3">
      <a href={category.link}>
        <img
          src={category.image}
          className="rounded-circle img-fluid border"
          alt={category.alt}
        />
      </a>
      <h5 className="text-center mt-3 mb-4">{category.name}</h5>
       <div className='text-center'>
       <a href={category.link} className="p-1">
        <FormButton label="Go Shop"></FormButton>
        </a>
       </div>
    </div>
  );
};

export default CardCircle;