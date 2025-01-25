import React from 'react';

export const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="section-header container-fluid bg-light py-5">
      <div className="col-md-6 m-auto text-center">
        <h1 className="h1">{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};
