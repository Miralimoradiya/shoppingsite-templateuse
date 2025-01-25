import React from 'react';

export const FormTextarea = ({ id, name, placeholder, rows, style }) => {
  return (
    <div className="mb-3" style={style}>
      <label htmlFor={id}>{placeholder}</label>
      <textarea
        className="form-control mt-1"
        id={id}
        name={name}
        placeholder={placeholder}
        rows={rows}
        style={style}
      ></textarea>
    </div>
  );
};
