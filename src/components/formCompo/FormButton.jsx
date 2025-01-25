import React from 'react';

export const FormButton = ({ label, style }) => {
  return (
   <>
        <button type="submit" className="btn btn-success btn-lg px-3">
          {label}
        </button>
     
   </>
  );
};
