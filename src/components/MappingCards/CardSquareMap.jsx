import React from "react";

const CardSquareMap = ({ heading, data, products, children }) => {
  return (
    <section className="bg-light">
      <div className="container py-5">
        <div className="row text-center py-3">
          <div className="col-lg-6 m-auto">
            <h1 className="h1">{heading}</h1>
            <p>{data}</p>
          </div>
        </div>
        <div className="row">
          {products.map((product, index) =>
            React.cloneElement(children, { key: index, product })
          )}
        </div>
      </div>
    </section>
  );
};

export default CardSquareMap;
