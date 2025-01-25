import React from 'react';

export const FormInput = ({ id, name, type, placeholder, style }) => {
  return (
    <div className="form-group col-md-12 " style={style}>
      <label htmlFor={id}>{placeholder}</label>
      <input
        type={type}
        className="form-control mt-1"
        id={id}
        name={name}
        placeholder={placeholder}
        style={style}
      />
    </div>
  );
};
