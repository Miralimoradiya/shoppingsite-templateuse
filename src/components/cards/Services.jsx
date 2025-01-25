import React from 'react';

const Services = ({ title, description, services }) => {
  const isSingleCard = services.length === 1;

  return (
    <section className="container py-5">

      {!isSingleCard && (
        <div className="row text-center pt-5 pb-3">
          <div className="col-lg-6 m-auto">
            <h1 className="h1">{title}</h1>
            <p>{description}</p>
          </div>
        </div>
      )}

      <div className="row">
        {services.map((service, index) => (
          <div
            key={index}
            className={isSingleCard ? 'col-md-12' : 'col-md-6 col-lg-3 pb-5'}
          >
            <div className={`h-100 py-5 services-icon-wap shadow ${isSingleCard ? 'mx-auto' : ''}`}>
              <div className="h1 text-success text-center">
                <i className={service.iconClass}></i>
              </div>
              <h2 className="h5 mt-4 text-center">{service.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
