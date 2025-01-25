import React from 'react';

const CategoryOfMonth = ({ title, description, categories, children }) => {
  return (
    <section className="container py-5">
      <div className="row text-center pt-3">
        <div className="col-lg-6 m-auto">
          <h1 className="h1">{title}</h1>
          <p>{description}</p>
        </div>
      </div>
      <div className="row">
        {categories.map((category, index) => (
          React.cloneElement(children, { key: index, category })
        ))}
      </div>
    </section>
  );
};

export default CategoryOfMonth;